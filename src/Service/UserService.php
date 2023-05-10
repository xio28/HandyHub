<?php
namespace App\Service;

use App\Constants\RolesConstants;
use App\Document\UsersDocument;
use App\Service\EmailService;
use Doctrine\ODM\MongoDB\DocumentManager;
use Psr\Log\LoggerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;


class UserService {
    private $documentManager;
    private $passwordEncoder;
    private $validator;
    private $logger;
    private $emailService;
    private $router;

    public function __construct(
        DocumentManager $documentManager, 
        UserPasswordEncoderInterface $passwordEncoder,
        ValidatorInterface $validator,
        LoggerInterface $logger,
        EmailService $emailService,
        UrlGeneratorInterface $router
    ) {
        $this->documentManager = $documentManager;
        $this->passwordEncoder = $passwordEncoder;
        $this->validator = $validator;
        $this->logger = $logger;
        $this->emailService = $emailService;
        $this->router = $router;
    }

    public function registerUser(Request $request)
    {
        try {
            $user = new UsersDocument();

            $user->setEmail($request->request->get('email'));
            $user->setPassword($this->hashPassword($request->request->get('password'), $user));
            $user->setName($request->request->get('name'));
            $user->setSurname($request->request->get('surname'));
            $user->setAddress($request->request->get('address'));
            $user->setTelephone($request->request->get('telephone'));
            $user->setRole(RolesConstants::ROLE_CLIENT);
            $user->setImage($request->request->get('image'));

            $creditCardInfo = [
                'number' => $request->request->get('credit_card_number'),
                'name' => $request->request->get('credit_card_name'),
                'expiry' => $request->request->get('credit_card_expiry'),
                'cvv' => $request->request->get('credit_card_cvv'),
            ];
            $user->setCreditCard($creditCardInfo);
            $user->setPolicy($request->request->get('policy'));

            $user->setIsVerfied($user->getIsVerified());
            // ... establecer los otros campos aquí
    
            // Validar los datos del usuario
            // $errors = $this->validator->validate($user);
    
            // if (count($errors) > 0) {
            //     $errorsString = (string) $errors;

            //     return new Response($errorsString);
            // }
    
            // Persistir el nuevo usuario
            $this->documentManager->persist($user);
            $this->documentManager->flush();

            $verificationLink = $this->router->generate('app_verify_email', ['id' => $user->getId()], UrlGeneratorInterface::ABSOLUTE_URL);

            $this->emailService->sendVerificationEmail($user->getEmail(), $verificationLink);

        } catch(Exception $e) {
            $this->logger->error('Error al registrar al usuario: ' . $e->getMessage());
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
            $user->setPassword($newPassword);
            $this->documentManager->flush();
        }
    }

    private function hashPassword(string $password, UsersDocument $user): string
    {
        return $this->passwordEncoder->encodePassword($user, $password);
    }
}
?>
