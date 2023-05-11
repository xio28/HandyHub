<?php

namespace App\Controller;

use App\Service\UserService;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\RedirectResponse;
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
            // return new RedirectResponse('Usuario registrado con éxito.', 200);
        } 

        return $this->render('register/register.html.twig', [
            'controllerName' => 'app_client_register'
        ]);
    }

    /**
     * @Route("/register/specialist", name="app_specialist_register")
     */
    public function registerSpecialist(Request $request)
    {
        $form = $this->createForm(ClientType::class);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            // Obtén los datos del formulario
            $clientData = $form->getData();

            // Realiza las acciones necesarias para registrar al cliente
            // (por ejemplo, crea una instancia del UserDocument, asigna el role 'client', guarda en la base de datos)

            // Redirige a la página de éxito o realiza otra acción
            return $this->redirectToRoute('registration_success');
        }

        return $this->render('forms/client_register.html.twig', [
            'form' => $form->createView(),
        ]);
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
    public function getSpecialists(UserRepository $UserRepository)
    {
        return $this->render('forms/get_users.html.twig', [
            'specialists' => $UserRepository->getUsersByRole('ROLE_SPECIALIST')
        ]);
    }
}

?>
