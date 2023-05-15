<?php

namespace App\Controller;

use App\Service\UserService;
use App\Repository\CategoryRepository;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class UserController extends AbstractController
{
    /**
     * @Route("/register/client", name="app_client_register")
     */
    public function registerClient(Request $request, UserService $userService)
    {
        if ($request->isMethod('POST')) {
            $success = $userService->registerClient($request);
            
            if ($success) {
                return $this->redirectToRoute('app_index');
            } else {
                throw new \Exception('Ha habido un error al registrarte. Por favor, inténtalo de nuevo.');
            }
        } 

        return $this->render('register/register.html.twig', [
            'controllerName' => 'app_client_register'
        ]);
    }

    /**
     * @Route("/register/specialist", name="app_specialist_register")
     */
    public function registerSpecialist(Request $request, UserService $userService, CategoryRepository $categoryRepository)
    {
        $categories = $categoryRepository->getAll();

        if ($request->isMethod('POST')) {
            $success = $userService->registerSpecialist($request);
            
            if ($success) {
                return $this->redirectToRoute('app_index');
            } else {
                throw new \Exception('Ha habido un error al registrarte. Por favor, inténtalo de nuevo.');
            }
        } 

        return $this->render('register/register.html.twig', [
            'controllerName' => 'app_specialist_register',
            'categories' => $categories
        ]);
    }

    /**
     * @Route("/delete_user/{id}", name="app_delete_user", methods={"DELETE"})
    */
    public function deleteUser(int $id, UserService $userService): Response
    {
        $userService->deleteUserById($id);

        return new JsonResponse(['success' => true]);
    }

    /**
     * @Route("/get/users", name="app_get_users")
     */
    public function getUsers(UserService $userService)
    {
        return $this->render('forms/get_users.html.twig', [
            'users' => $userService->getUsers()
        ]);
    }

    /**
     * @Route("/get/specialists", name="app_get_specialists")
     */
    public function getSpecialists(UserRepository $userRepository)
    {
        return $this->render('forms/get_users.html.twig', [
            'specialists' => $userRepository->getUsersByRole(['ROLE_SPECIALIST'])
        ]);
    }
}

?>
