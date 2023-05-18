<?php

namespace App\Controller;

use App\Repository\CategoryRepository;
use App\Repository\ContractRepository;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class MainController
 *
 * Controller for handling main page routes.
 */
class MainController extends AbstractController
{
    private $categoryRepository;
    private $userRepository;

    /**
     * MainController constructor.
     *
     * @param CategoryRepository $categoryRepository The repository for Category entities.
     * @param UserRepository $userRepository The repository for User entities.
     * @param ContractRepository $contractRepository The repository for Contract entities.
     */
    public function __construct(CategoryRepository $categoryRepository, UserRepository $userRepository, ContractRepository $contractRepository)
    {
        $this->categoryRepository = $categoryRepository;
        $this->userRepository = $userRepository;
        $this->contractRepository = $contractRepository;
    }

    /**
     * Handles the request for the homepage ("/").
     *
     * @Route("/", name="app_index")
     * @return Response
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
     * Handles the request for the services page ("/services").
     *
     * @Route("/services", name="app_services")
     * @return Response
     */
    public function services(): Response
    {
        $specialists = $this->userRepository->getUsersByRole('ROLE_SPECIALIST');
        
        return $this->render('services/services.html.twig', [
            'specialists' => $specialists,
        ]);
    }

    /**
     * Handles the request for the about page ("/about").
     *
     * @Route("/about", name="app_about")
     * @return Response
     */
    public function about(): Response
    {
        return $this->render('about/about.html.twig');
    }

    /**
     * Handles the request for the contact page ("/support").
     *
     * @Route("/support", name="app_support")
     * @return Response
     */
    public function contact(): Response
    {
        return $this->render('forms/contact_form.html.twig');
    }

    /**
     * Handles the request for the error page ("/error") taking the {code}.
     *
     * @Route("/error/{code}", name="app_error_page")
     * @return Response
     */
    public function errorPage(int $code): Response
    {
        if ($code === 404) {
            return $this->render('errors/404.html.twig');
        } 
        elseif ($code === 500) {
            return $this->render('errors/500.html.twig');
        }
    }
}

?>
