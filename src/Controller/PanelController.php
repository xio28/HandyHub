<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PanelController extends AbstractController
{
    /**
     * @Route("/panel/admin", name="app_admin_panel")
     */
    public function panelAdmin(): Response
    {
        //
    }

    /**
     * @Route("/panel/client", name="app_client_panel")
     */
    public function panelClient(): Response
    {
        // código aquí
    }

    /**
     * @Route("/panel/specialist", name="app_specialist_panel")
     */
    public function panelSpecialist(): Response
    {
        // código aquí
    }
}

?>
