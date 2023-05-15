<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

/**
 * AuthController is responsible for handling user authentication.
 */
class AuthController extends AbstractController
{
    /**
     * Handles the user login.
     *
     * @Route("/login", name="app_login")
     * @param AuthenticationUtils $authenticationUtils A Symfony utility to get authentication errors and last username.
     * @return Response The response object with rendered login view.
     */
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        // Get the last authentication error if any.
        $error = $authenticationUtils->getLastAuthenticationError();

        // Get the last username entered by the user.
        $lastEmail = $authenticationUtils->getLastUsername();

        // Render the login form along with error and last username if any.
        return $this->render('sign_in/sign_in.html.twig', [
            'last_email' => $lastEmail, 
            'error' => $error
        ]);
    }

    /**
     * Handles the user logout.
     *
     * @Route("/logout", name="app_logout")
     * This method can be blank because Symfony will intercept this 
     * route and automatically provide the logout functionality.
     */
    public function logout()
    {
        // No need to provide any logic here, Symfony handles this.
    }
}


?>
