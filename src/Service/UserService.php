<?php
namespace App\Service;

use App\Constants\RolesConstants;
use App\Document\UsersDocument;
use App\Repository\UserRepository;
use App\Repository\CategoryRepository;
use App\Service\EmailService;
use Doctrine\ODM\MongoDB\DocumentManager;
use Psr\Log\LoggerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

/**
 * Class UserService
 *
 * This service class handles all user-related operations such as registration, update, deletion, and password change.
 * It supports operations for three types of users: Clients, Specialists, and Administrators.
 * It uses Doctrine's DocumentManager for database operations and Symfony's Validator for validation tasks.
 *
 * @package App\Service
 */
class UserService {
    private $documentManager;
    private $validator;
    private $logger;
    private $emailService;
    private $router;
    private $passwordHasher;
    private $userRepository;
    private $categoryRepository;
    private $publicDirectory;

    public function __construct(
        DocumentManager $documentManager, 
        ValidatorInterface $validator,
        LoggerInterface $logger,
        EmailService $emailService,
        UrlGeneratorInterface $router,
        UserPasswordHasherInterface $passwordHasher,
        UserRepository $userRepository,
        CategoryRepository $categoryRepository,
        string $publicDirectory
    ) {
        $this->documentManager = $documentManager;
        $this->validator = $validator;
        $this->logger = $logger;
        $this->emailService = $emailService;
        $this->router = $router;
        $this->passwordHasher = $passwordHasher;
        $this->userRepository = $userRepository;
        $this->categoryRepository = $categoryRepository;
        $this->publicDirectory = $publicDirectory;
    }

    /**
     * Register a new client.
     *
     * @param Request $request The HTTP request object with the client data.
     * @return bool|Response Returns true if the client is registered successfully, otherwise returns a HTTP response with an error message.
     * @throws \Exception
     */
    public function registerClient(Request $request)
    {
        try {
            $user = new UsersDocument();

            if ($this->checkEmail($request->get('email'))) {
                throw new \Exception('Email is in use.');
            }

            $user->setEmail($request->get('email'));
            $user->setPassword($this->hashPassword($request->get('password'), $user));
            $user->setName($request->get('name'));
            $user->setSurname($request->get('surname'));
            $user->setAddress($request->get('address'));
            $user->setTelephone($request->get('telephone'));
            $user->setRoles([RolesConstants::ROLE_CLIENT]);

            $creditCardInfo = [
                'number' => $request->get('creditNumber'),
                'name' => $request->get('creditName'),
                'expiry' => $request->get('creditExpire'),
                'cvv' => $request->get('creditCvv'),
            ];
            $user->setCreditCard($creditCardInfo);
            $user->setPolicy($request->get('privacy'));

            $user->setIsVerified($user->getIsVerified());

            $this->documentManager->persist($user);
            $this->documentManager->flush();

            $image = $request->files->get('image');
            $dir = $this->publicDirectory;
            $resourcesPath = '/resources/images/users/';

            if($image) {
                $fileName = 'client_' . $user->getId() . '.' . $image->getClientOriginalExtension();
                $image->move($dir . $resourcesPath, $fileName);
                $user->setImage($resourcesPath . $fileName);
            } else {
                $user->setImage($resourcesPath . 'commonPic.jpg');
            }

            $this->documentManager->persist($user);
            $this->documentManager->flush();

            $verificationLink = $this->router->generate('app_verify_email', ['id' => $user->getId()], UrlGeneratorInterface::ABSOLUTE_URL);

            $this->logger->info('User '. $user->getId(). ' registered successfully');
            $this->emailService->sendVerificationEmail($user->getEmail(), $verificationLink);

            return true;
            
        } catch(Exception $e) {
            $this->logger->error('User register failed: ' . $e->getMessage());
            return new Response('Ha habido un error al registrarte. Por favor, inténtalo de nuevo.', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Update a client's data.
     *
     * @param Request $request The HTTP request object with the updated client data.
     * @param int $id The ID of the client to be updated.
     * @return bool|Response Returns true if the client data is updated successfully, otherwise returns a HTTP response with an error message.
     * @throws \Exception
     */
    public function updateClient(Request $request, int $id)
    {
        try {
            $user = $this->documentManager->getRepository(UsersDocument::class)->find($id);
    
            if (!$user) {
                throw new \Exception('User not found.');
            }
    
            if ($request->get('email') && $this->checkEmail($request->get('email'), $id)) {
                throw new \Exception('Email is already in use.');
            }
    
            $fieldsToUpdate = ['email', 'password', 'name', 'surname', 'address', 'telephone'];
            $creditCardFields = ['creditNumber', 'creditName', 'creditExpire', 'creditCvv'];
    
            foreach ($fieldsToUpdate as $field) {
                if ($request->request->has($field) && $request->get($field) !== '') {
                    $value = $request->get($field);
                    $setterMethod = 'set' . ucfirst($field);
                    $user->$setterMethod($value);
                }
            }
            
            $creditCardInfo = [];
            foreach ($creditCardFields as $field) {
                if ($request->request->has($field) && $request->get($field) !== '') {
                    $value = $request->get($field);
                    $creditCardInfo[$field] = $value;
                }
            }

            if (!empty($creditCardInfo)) {
                $user->setCreditCard($creditCardInfo);
            }
    
            $image = $request->files->get('image');
            $dir = $this->publicDirectory;
            $resourcesPath = '/resources/images/users/';

            if ($image) {
                $currentImageName = $user->getImage();
                $currentImageFullPath = $dir . $currentImageName;

                if (file_exists($currentImageFullPath)) {
                    unlink($currentImageFullPath);
                }

                $fileName = 'client_' . $user->getId() . '.' . $image->getClientOriginalExtension();
                $image->move($dir . $resourcesPath, $fileName);
                $user->setImage($resourcesPath . $fileName);
            }
    
            $this->documentManager->persist($user);
            $this->documentManager->flush();
    
            $this->logger->info('User ' . $user->getId() . ' updated successfully');
    
            return true;
    
        } catch (Exception $e) {
            $this->logger->error('User update failed: ' . $e->getMessage());
            return new Response('Ha habido un error al actualizar el usuario. Por favor, inténtalo de nuevo.', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }    

    /**
     * Register a new specialist.
     *
     * @param Request $request The HTTP request object with the specialist data.
     * @return bool|Response Returns true if the specialist is registered successfully, otherwise returns a HTTP response with an error message.
     * @throws \Exception
     */
    public function registerSpecialist(Request $request)
    {
        try {
            $user = new UsersDocument();
    
            if ($this->checkEmail($request->get('email'))) {
                throw new \Exception('Email is in use.');
            }
    
            $user->setEmail($request->get('email'));
            $user->setPassword($this->hashPassword($request->get('password'), $user));
            $user->setName($request->get('name'));
            $user->setSurname($request->get('surname'));
            $user->setTelephone($request->get('telephone'));
            $user->setRoles([RolesConstants::ROLE_SPECIALIST]);
            $user->setCurrentAccount($request->get('current_account'));
            $user->setPricePerHour($request->get('price_per_hour'));
            $user->setIsAvailable(true);
    
            $categoryId = $request->get('category');
    
            $category = $this->categoryRepository->findCategoryById($categoryId);
    
            if ($category === null) {
                throw new \Exception('Invalid category ID.');
            }
    
            $user->setCategory($category);
    
            $user->setPolicy($request->get('privacy'));
    
            $user->setIsVerified($user->getIsVerified());
    
            $this->documentManager->persist($user);
            $this->documentManager->flush();
    
            $image = $request->files->get('image');
            $dir = $this->publicDirectory;
            $resourcesPath = '/resources/images/users/';
    
            if ($image) {
                $fileName = 'specialist_' . $user->getId() . '.' . $image->getClientOriginalExtension();
                $image->move($dir . $resourcesPath, $fileName);
                $user->setImage($resourcesPath . $fileName);
            } else {
                $user->setImage($resourcesPath . 'commonPic.jpg');
            }
    
            $this->documentManager->persist($user);
            $this->documentManager->flush();
    
            $verificationLink = $this->router->generate('app_verify_email', ['id' => $user->getId()], UrlGeneratorInterface::ABSOLUTE_URL);
    
            $this->logger->info('User ' . $user->getId() . ' registered successfully');
            $this->emailService->sendVerificationEmail($user->getEmail(), $verificationLink);
    
            return true;
    
        } catch (Exception $e) {
            $this->logger->error('User register failed: ' . $e->getMessage());
            return new Response('Ha habido un error al registrarte. Por favor, inténtalo de nuevo.', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Update a specialist's data.
     *
     * @param Request $request The HTTP request object with the updated specialist data.
     * @param int $id The ID of the specialist to be updated.
     * @return bool|Response Returns true if the specialist data is updated successfully, otherwise returns a HTTP response with an error message.
     * @throws \Exception
     */
    public function updateSpecialist(Request $request, int $id)
    {
        try {
            $user = $this->documentManager->getRepository(UsersDocument::class)->find($id);
    
            if (!$user) {
                throw new \Exception('User not found.');
            }
    
            if ($request->get('email') && $this->checkEmail($request->get('email'), $id)) {
                throw new \Exception('Email is already in use.');
            }
    
            $fieldsToUpdate = ['email', 'password', 'name', 'surname', 'telephone'];
            foreach ($fieldsToUpdate as $field) {
                if ($request->request->has($field) && $request->get($field) !== '') {
                    $value = $request->get($field);
                    $setterMethod = 'set' . ucfirst($field);
                    $user->$setterMethod($value);
                }
            }
    
            if ($request->request->has('current_account') && $request->get('current_account') !== '') {
                $user->setCurrentAccount($request->get('current_account'));
            }
    
            if ($request->request->has('price_per_hour') && $request->get('price_per_hour') !== '') {
                $user->setPricePerHour($request->get('price_per_hour'));
            }
    
            $image = $request->files->get('image');
            $dir = $this->publicDirectory;
            $resourcesPath = '/resources/images/users/';
    
            if ($image) {
                $currentImageName = $user->getImage();
                $currentImageFullPath = $dir . $currentImageName;
    
                if (file_exists($currentImageFullPath)) {
                    unlink($currentImageFullPath);
                }
    
                $fileName = 'specialist_' . $user->getId() . '.' . $image->getClientOriginalExtension();
                $image->move($dir . $resourcesPath, $fileName);
                $user->setImage($resourcesPath . $fileName);
            }
    
            $this->documentManager->persist($user);
            $this->documentManager->flush();
    
            $this->logger->info('User ' . $user->getId() . ' updated successfully');
    
            return true;
            
        } catch (Exception $e) {
            $this->logger->error('User update failed: ' . $e->getMessage());
            return new Response('Ha habido un error al actualizar el usuario. Por favor, inténtalo de nuevo.', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Register a new admin.
     *
     * @param Request $request The HTTP request object with the admin data.
     * @return bool|Response Returns true if the admin is registered successfully, otherwise returns a HTTP response with an error message.
     * @throws \Exception
     */
    public function registerAdmin(Request $request)
    {
        try {
            $user = new UsersDocument();

            if ($this->checkEmail($request->get('email'))) {
                throw new \Exception('Email is in use.');
            }

            $user->setEmail($request->get('email'));
            $user->setPassword($this->hashPassword($request->get('password'), $user));
            $user->setName($request->get('name'));
            $user->setSurname($request->get('surname'));
            $user->setRoles([RolesConstants::ROLE_ADMIN]);

            $this->documentManager->persist($user);
            $this->documentManager->flush();

            $this->logger->info('Admin ' . $user->getId() . ' registered successfully');

            return true;

        } catch(Exception $e) {
            $this->logger->error('Admin register failed: ' . $e->getMessage());
            return new Response('Ha habido un error al registrar el administrador. Por favor, inténtalo de nuevo.', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Resend a verification email to a user.
     *
     * @param int $id The ID of the user.
     * @return Response Returns a HTTP response indicating the result of the operation.
     */
    public function resendEmail(int $id) {
        $user = $this->userRepository->findUserById($id);
    
        if (!$user) {
            $this->logger->error('User with ID ' . $id . ' not found');
            return new Response('User not found.', Response::HTTP_NOT_FOUND);
        }
    
        try {
            $verificationLink = $this->router->generate('app_verify_email', ['id' => $id], UrlGeneratorInterface::ABSOLUTE_URL);
            
            $this->logger->info('Resend verification email to User ' . $user->getId());
    
            $this->emailService->sendVerificationEmail($user->getEmail(), $verificationLink);
            
            return new Response('Verification email resent successfully.', Response::HTTP_OK);
        } catch (Exception $e) {
            $this->logger->error('Resent verification email failed: '. $e->getMessage());
            return new Response('Error trying to resend the email.', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Delete a user by their ID.
     *
     * @param int $id The ID of the user to be deleted.
     */
    public function deleteUserById(int $id): void
    {
        $user = $this->userRepository->findUserById($id);

        if ($user) {
            $this->documentManager->remove($user);
            $this->documentManager->flush();
        }
    }

    /**
     * Hash a password.
     *
     * @param string $password The password to be hashed.
     * @param UsersDocument $user The user document.
     * @return string The hashed password.
     */
    private function hashPassword(string $password, UsersDocument $user): string
    {
        return $this->passwordHasher->hashPassword($user, $password);
    }

    /**
     * Check if a given password matches the hashed password of a user.
     *
     * @param string $password The password to be checked.
     * @param UsersDocument $user The user document.
     * @return bool True if the password matches, false otherwise.
     */
    public function checkPassword(string $password, UsersDocument $user): bool
    {
        return $this->passwordHasher->isPasswordValid($user, $password);
    }

    /**
     * Checks if an email exists in the user repository.
     *
     * @param string $email The email to be checked.
     * @return bool Returns true if the email exists in the user repository, false otherwise.
     */
    public function checkEmail(string $email): bool
    {
        $emailExists = $this->userRepository->findUserByEmail($email);
        return $emailExists instanceof UsersDocument;
    }

}
?>
