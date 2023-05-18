<?php

namespace App\Controller;

use App\Repository\UserRepository;
use App\Service\EmailService;
use App\Service\VerificationService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

/**
 * Class VerificationController
 *
 * This controller handles routes related to email verification.
 */
class VerificationController extends AbstractController
{
    private $router;
    private $userRepository;
    private $verification;
    private $emailService;

    /**
     * VerificationController constructor.
     *
     * @param UrlGeneratorInterface $router
     * @param UserRepository $userRepository
     * @param VerificationService $verification
     * @param EmailService $emailService
     */
    public function __construct(UrlGeneratorInterface $router, UserRepository $userRepository, VerificationService $verification, EmailService $emailService)
    {
        $this->router = $router;
        $this->userRepository = $userRepository;
        $this->verification = $verification;
        $this->emailService = $emailService;
    }

    /**
     * @Route("/verify/{id}", name="app_verify_email")
     *
     * Verifies a user's email by the user's id. Sends a confirmation email if the email is verified.
     *
     * @param int $id User id
     * @return Response
     */
    public function verifyEmail(int $id)
    {
        $verified = $this->verification->verifyUser($id);
        $email = $this->userRepository->findUserById($id);

        if ($verified) {
            $this->emailService->sendAccountVerificationConfirmationEmail($email->getEmail());
        }

        return $this->redirectToRoute('app_index');
    }
}

?>
