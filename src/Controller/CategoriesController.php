<?php

namespace App\Controller;

use App\Service\UserService;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CategoriesController extends AbstractController
{
    /**
     * @Route("/get/categories", name="app_get_categories")
     */
    public function getCategories(Request $request, UserService $userService)
    {
        if ($request->isMethod('POST')) {
            $success = $userService->registerClient($request);
            
            if ($success) {
                return $this->redirectToRoute('app_index');
            } else {
                throw new \Exception('Ha habido un error al registrarte. Por favor, inténtalo de nuevo.');
            }
            // return new RedirectResponse('Usuario registrado con éxito.', 200);
        } 

        return $this->render('register/register.html.twig', [
            'controllerName' => 'app_client_register'
        ]);
    }
}

?>
