<?php

namespace App\Controller;

use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{
    private $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    /**
     * @Route("/", name="app_index")
     */
    public function index(): Response
    {

        $specialists = $this->userRepository->getUsersByRole('ROLE_SPECIALIST');
        $specialistsWithImage = array_filter($specialists, function ($specialist) {
            return $specialist->getImage() !== null;
        });

        return $this->render('index/index.html.twig', [
            'register' => 'app_client_register',
            'specialists' => 'app_specialist_register',
            'specialists_images' => $specialistsWithImage,
        ]);
    }

    /**
     * @Route("/services", name="app_services")
     */
    public function services(): Response
    {
        return $this->render('services/services.html.twig', [
            'register' => 'app_client_register',
            'specialists' => 'app_specialist_register'
        ]);
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
        return $this->render('forms/contact_form.html.twig', [
            'register' => 'app_client_register',
            'specialists' => 'app_specialist_register'
        ]);
    }

    /**
     * @Route("/error", name="app_error_page")
     */
    public function errorPage(): Response
    {
        return $this->render('error/404.html.twig');
    }
}

?>
