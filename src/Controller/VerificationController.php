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

        if ($verified) {
            return $this->redirectToRoute('app_index');
        } else {
            throw new \Exception('Ha habido un error al verficar tu cuenta. Por favor, contacta con soporte.');
        }
    }
}

?>
