<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\HttpExceptionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Twig\Environment;

class ExceptionController extends AbstractController
{
    private $twig;

    public function __construct(Environment $twig)
    {
        $this->twig = $twig;
    }

    public function showException(\Throwable $exception): Response
    {
        $statusCode = $exception instanceof HttpExceptionInterface ? $exception->getStatusCode() : 500;
    
        if ($statusCode === 404) {
            $content = $this->twig->render('errors/404.html.twig', [
                'message' => $exception->getMessage(),
            ]);
        } else {
            $content = $this->twig->render('errors/404.html.twig', [
                'message' => $exception->getMessage(),
            ]);
        }
    
        return new Response($content, $statusCode);
    }
}

?>
