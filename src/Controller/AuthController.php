<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;


class AuthController extends AbstractController
{
    /**
     * @Route("/login", name="app_login")
     */
    public function login()
    {
        // Lógica del inicio de sesión
    }

    /**
     * @Route("/logout", name="app_logout")
     */
    public function logout()
    {
        // Lógica del cierre de sesión
    }
}


?>
