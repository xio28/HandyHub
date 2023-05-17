<?php

namespace App\Controller;

use App\Repository\CategoryRepository;
use App\Repository\ContractRepository;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{
    private $categoryRepository;
    private $userRepository;

    public function __construct(CategoryRepository $categoryRepository, UserRepository $userRepository, ContractRepository $contractRepository)
    {
        $this->categoryRepository = $categoryRepository;
        $this->userRepository = $userRepository;
        $this->contractRepository = $contractRepository;
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


        // return $this->render('panels/client_panel.html.twig');
        // $users = $this->userRepository->getAll();
        // $categories = $this->categoryRepository->getAll();
        // $contracts = $this->contractRepository->getAll();

        // return $this->render('panels/admin_panel.html.twig', [
        //     'users' => $users,
        //     'categories' => $categories,
        //     'contracts' => $contracts,
        // ]);
        // return $this->render('contract/start_contract.html.twig');
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
        $specialists = $this->userRepository->getUsersByRole('ROLE_SPECIALIST');
        
        return $this->render('services/services.html.twig', [
            'specialists' => $specialists,
        ]);
    }

    /**
     * @Route("/about", name="app_about")
     */
    public function about(): Response
    {
        return $this->render('about/about.html.twig');
    }

    /**
     * @Route("/support", name="app_support")
     */
    public function contact(): Response
    {
        return $this->render('forms/contact_form.html.twig');
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
