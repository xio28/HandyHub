<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\HttpExceptionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Twig\Environment;

/**
 * Class ExceptionController
 *
 * This class handles the display of exceptions.
 */
class ExceptionController extends AbstractController
{
    private $twig;

    /**
     * ExceptionController constructor.
     *
     * @param Environment $twig The twig environment.
     */
    public function __construct(Environment $twig)
    {
        $this->twig = $twig;
    }

    /**
     * Handles exceptions by determining the status code and redirecting accordingly.
     *
     * @param \Throwable $exception The exception that was thrown.
     * @return Response A redirect response to an error page.
     */
    public function showException(\Throwable $exception): Response
    {
        $statusCode = $exception instanceof HttpExceptionInterface ? $exception->getStatusCode() : 500;
    
        if ($statusCode === 404) {
            return $this->redirectToRoute('app_error_page', ['code' => 404]);
        } else {
            return $this->redirectToRoute('app_error_page', ['code' => 500]);
        }
    }
}

?>
