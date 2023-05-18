<?php

namespace App\Controller;

use App\Document\UsersDocument;
use App\Service\UserService;
use App\Repository\CategoryRepository;
use App\Repository\UserRepository;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Security;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * Class UserController
 * 
 * This controller manages user-related routes
 */
class UserController extends AbstractController
{
    private $documentManager;
    private $userService;
    private $security;

    /**
     * UserController constructor.
     *
     * @param UserService $userService
     * @param DocumentManager $documentManager
     * @param Security $security
     */
    public function __construct(UserService $userService, DocumentManager $documentManager, Security $security)
    {
        $this->documentManager = $documentManager;
        $this->userService = $userService;
        $this->security = $security;
    }

    /**
     * @Route("/register/client", name="app_client_register")
     *
     * Handles client registration
     */
    public function registerClient(Request $request)
    {
        if ($request->isMethod('POST')) {
            $success = $this->userService->registerClient($request);
            
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
     *
     * Handles specialist registration
     */
    public function registerSpecialist(Request $request, CategoryRepository $categoryRepository)
    {
        $categories = $categoryRepository->getAll();

        if ($request->isMethod('POST')) {
            $success = $this->userService->registerSpecialist($request);
            
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
     * @Route("/register/admin", name="app_admin_register")
     *
     * Handles admin registration
     */
    public function registerAdmin(Request $request)
    {
        if ($request->isMethod('POST')) {
            $user = new UsersDocument();
            $success = $this->userService->registerAdmin($request);
            
            $this->documentManager->flush();
            $adminId = $user->getId();

            if ($success) {
                return new JsonResponse([
                    'success' => true, 
                    'adminId' => $adminId
                ]);
            } else {
                throw new \Exception('Ha habido un error al registrarte. Por favor, inténtalo de nuevo.');
            }
        } 
    }

    /**
     * @Route("/update/client", name="app_client_update")
     *
     * Handles client update
     */
    public function updateClient(Request $request)
    {
        if ($request->isMethod('POST')) {
            $user = $this->security->getUser();
            $userId = $user->getId();

            $success = $this->userService->updateClient($request, $userId);
            
            if ($success) {
                return $this->redirectToRoute('app_client_panel');
            } else {
                throw new \Exception('Ha habido un error al actualizar.');
            }
        } 
    }
    
    /**
     * @Route("/update/specialist", name="app_specialist_update")
     *
     * Handles specialist update
     */
    public function updateSpecialist(Request $request)
    {
        if ($request->isMethod('POST')) {
            $user = $this->security->getUser();
            $userId = $user->getId();

            $success = $this->userService->updateSpecialist($request, $userId);
            
            if ($success) {
                return $this->redirectToRoute('app_specialist_panel');
            } else {
                throw new \Exception('Ha habido un error al actualizar.');
            }
        } 
    }
    
    /**
     * @Route("/resend_email/{id}", name="app_resend_email", methods={"POST"})
     *
     * Resends email to user with the provided ID
     */
    public function resendEmail(int $id)
    {
        $response = $this->userService->resendEmail($id);
        return $response;
    }

    /**
     * @Route("/delete_user/{id}", name="app_delete_user", methods={"DELETE"})
     *
     * Deletes user with the provided ID
     */
    public function deleteUser(int $id): Response
    {
        $this->userService->deleteUserById($id);

        return new JsonResponse(['success' => true]);
    }

    /**
     * @Route("/get/users", name="app_get_users")
     *
     * Fetches all users
     */
    public function getUsers()
    {
        return $this->render('forms/get_users.html.twig', [
            'users' => $this->userService->getUsers()
        ]);
    }

    /**
     * @Route("/get/specialists", name="app_get_specialists")
     *
     * Fetches all specialist users
     */
    public function getSpecialists(UserRepository $userRepository)
    {
        return $this->render('forms/get_users.html.twig', [
            'specialists' => $userRepository->getUsersByRole(['ROLE_SPECIALIST'])
        ]);
    }
}

?>
