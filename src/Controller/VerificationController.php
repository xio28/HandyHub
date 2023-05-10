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
    public function verifyEmail($id, VerificationService $verification)
    {
        $verified = $verification->verifyUser($id);
    }
}

?>
