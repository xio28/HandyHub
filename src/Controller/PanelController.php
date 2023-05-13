<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{
    /**
     * @Route("/panel/admin", name="app_index")
     */
    public function panelAdmin(): Response
    {
        //
    }

    /**
     * @Route("/panel/client", name="app_services")
     */
    public function panelClient(): Response
    {
        // código aquí
    }

    /**
     * @Route("/panel/specialist", name="app_about")
     */
    public function panelSpecialist(): Response
    {
        // código aquí
    }
}

?>
