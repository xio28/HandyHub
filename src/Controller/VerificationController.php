<?php

namespace App\Controller;

use App\Service\VerificationService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\Flash\FlashBagInterface;

class VerificationController extends AbstractController
{
    /**
     * @Route("/verify/{id}", name="app_verify_email")
     */
    public function verifyEmail(int $id, VerificationService $verification, FlashBagInterface $flashBag)
    {
        $verified = $verification->verifyUser($id);

        if ($verified) {
            $flashBag->add('success', 'Has verificado tu usuario correctamente');
        }

        return $this->redirectToRoute('app_index');
    }
}

?>
