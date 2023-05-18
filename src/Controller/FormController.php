<?php

namespace App\Controller;

use App\Service\UserService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * Class FormController
 * 
 * This class provides actions for managing forms.
 */
class FormController extends AbstractController
{
    /**
     * @Route("/check/email", name="app_check_email")
     *
     * Checks if an email exists.
     *
     * @param Request $request The current request.
     * @param UserService $userService The user service.
     * @return JsonResponse A JsonResponse instance.
     * @throws Exception If there's an error checking the email.
     */
    public function checkEmail(Request $request, UserService $userService)
    {
        try {
            $email = json_decode($request->getContent(), true)['email'];
            $emailExists = $userService->checkEmail($email);
            
            return new JsonResponse(['exists' => $emailExists]);
        } catch(Exception $e) {
            $this->logger->error('Email check failed: ' . $e->getMessage());
            return new JsonResponse(['error' => 'Error al chequear el email.']);
        }
    }
}

?>
