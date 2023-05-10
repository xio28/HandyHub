<?php

namespace App\Controller;

use App\Document\UsersDocument;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ConnectionController extends AbstractController
{
    /**
     * @Route("/app_conn", name="app_conn")
     */
    public function testConnection(DocumentManager $dm): Response
    {
        try {
            

            return new Response('Número de usuarios encontrados: ' . count($users));
        } catch (\Exception $e) {
            return new Response('Error al conectar a MongoDB Atlas: ' . $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}

?>
