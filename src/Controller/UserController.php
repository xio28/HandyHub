<?php

namespace App\Controller;

use App\Form\ClientType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class UserController extends AbstractController
{
    /**
     * @Route("/register/client", name="app_client_register")
     */
    public function registerClient(Request $request, UserService $userService)
    {
        if ($request->isMethod('POST')) {
            $userService->registerUser($request);
            // Aquí puedes redirigir al usuario a una página de éxito o simplemente devolver una respuesta 200.
            return new Response('Usuario registrado con éxito.', 200);
        } 

        return $this->render('register/client_register.html.twig', [
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
}

?>
