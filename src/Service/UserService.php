<?php
namespace App\Service;

use App\Constants\RolesConstants;
use App\Document\UsersDocument;
use App\Repository\UserRepository;
use App\Service\EmailService;
use Doctrine\ODM\MongoDB\DocumentManager;
use Psr\Log\LoggerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;


class UserService {
    private $documentManager;
    private $validator;
    private $logger;
    private $emailService;
    private $router;
    private $passwordHasher;
    private $userRepository;
    private $publicDirectory;

    public function __construct(
        DocumentManager $documentManager, 
        ValidatorInterface $validator,
        LoggerInterface $logger,
        EmailService $emailService,
        UrlGeneratorInterface $router,
        UserPasswordHasherInterface $passwordHasher,
        UserRepository $userRepository,
        string $publicDirectory
    ) {
        $this->documentManager = $documentManager;
        $this->validator = $validator;
        $this->logger = $logger;
        $this->emailService = $emailService;
        $this->router = $router;
        $this->passwordHasher = $passwordHasher;
        $this->userRepository = $userRepository;
        $this->publicDirectory = $publicDirectory;
    }

    public function registerClient(Request $request)
    {
        try {
            $this->documentManager->beginTransaction();

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
            $user->setRole(RolesConstants::ROLE_CLIENT);

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

            $this->documentManager->commit();

            return true;
            
        } catch(Exception $e) {
            $this->documentManager->rollback();
            $this->logger->error('User register failed: ' . $e->getMessage());
            return new Response('Ha habido un error al registrarte. Por favor, inténtalo de nuevo.', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

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
            $user->setRole(RolesConstants::ROLE_SPECIALIST);

            $image = $request->files->get('image');
            $dir = $this->publicDirectory;
            $resourcesPath = '/resources/images/users/';

            if($image) {
                $fileName = 'specialist_' . $user->getId() . '.' . $image->getClientOriginalExtension();
                $image->move($dir . $resourcesPath, $fileName);
                $user->setImage($resourcesPath . $fileName);
            } else {
                $user->setImage($resourcesPath . 'commonPic.jpg');
            }

            $user->setCurrentAccount($request->get('surname'));
            $user->setPolicy($request->get('privacy'));

            $user->setIsVerfied($user->getIsVerified());

            if (count($errors) > 0) {
                $errorsString = (string) $errors;
            
                throw new \Exception($errorsString);
            }

            // Persistir el nuevo usuario
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

    public function deleteUserByEmail(string $email): void
    {
        $user = $this->findUserByEmail($email);

        if ($user) {
            $this->documentManager->remove($user);
            $this->documentManager->flush();
        }
    }

    public function updatePassword(string $email, string $newPassword): void
    {
        $user = $this->findUserByEmail($email);
    
        if ($user) {
            $hashedPassword = $this->hashPassword($newPassword, $user);
            $user->setPassword($hashedPassword);
            $this->documentManager->flush();
        }
    }

    private function hashPassword(string $password, UsersDocument $user): string
    {
        return $this->passwordHasher->hashPassword($user, $password);
    }

    public function checkPassword(string $password, UsersDocument $user): bool
    {
        return $this->passwordHasher->isPasswordValid($user, $password);
    }

    public function checkEmail(string $email): bool
    {
        $emailExists = $this->userRepository->findUserByEmail($email);
        return $emailExists instanceof UsersDocument;
    }

}
?>
