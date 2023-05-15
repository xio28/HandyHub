<?php

namespace App\Controller;

use App\Service\VerificationService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class VerificationController extends AbstractController
{
    /**
     * @Route("/verify/{id}", name="app_verify_email")
     */
    public function verifyEmail(int $id, VerificationService $verification)
    {
        $verified = $verification->verifyUser($id);

        if ($response instanceof Response && $response->getStatusCode() != Response::HTTP_OK) {
            return $this->redirectToRoute('app_error_page', ['statusCode' => 404]);
        }

        return $this->render('verification/verification.html.twig', [
            'verified' => $verified,
        ]);
    }
}

?>
