<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{
    /**
     * @Route("/", name="app_index")
     */
    public function index(): Response
    {
        return $this->render('register/register.html.twig', [
            'controllerName' => 'app_client_register'
        ]);
    }

    /**
     * @Route("/services", name="app_services")
     */
    public function services(): Response
    {
        // código aquí
    }

    /**
     * @Route("/about", name="app_about")
     */
    public function about(): Response
    {
        // código aquí
    }

    /**
     * @Route("/support", name="app_support")
     */
    public function contact(): Response
    {
        // código aquí
    }
}

?>
