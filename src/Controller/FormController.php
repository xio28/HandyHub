<?php

namespace App\Controller;

use App\Service\UserService;
// use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class FormController extends AbstractController
{
    /**
     * @Route("/check/email", name="app_check_email")
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
