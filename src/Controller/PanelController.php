<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\CategoryRepository;
use App\Repository\ContractRepository;
use App\Repository\UserRepository;

class PanelController extends AbstractController
{
    private $userRepository;
    private $categoryRepository;
    private $contractRepository;

    /**
     * PanelController constructor.
     *
     * @param UserRepository $userRepository The UserRepository instance.
     * @param CategoryRepository $categoryRepository The CategoryRepository instance.
     * @param ContractRepository $contractRepository The ContractRepository instance.
     */
    public function __construct(UserRepository $userRepository, CategoryRepository $categoryRepository, ContractRepository $contractRepository)
    {
        $this->userRepository = $userRepository;
        $this->categoryRepository = $categoryRepository;
        $this->contractRepository = $contractRepository;
    }
    
    /**
     * Admin panel page.
     *
     * @Route("/admin", name="app_admin_panel")
     * @Security("is_granted('ROLE_ADMIN') or is_granted('ROLE_SUPERADMIN')")
     * @return Response The response instance.
     */
    public function panelAdmin(): Response
    {
        $users = $this->userRepository->getAll();
        $categories = $this->categoryRepository->getAll();
        $contracts = $this->contractRepository->getAll();

        return $this->render('panels/admin_panel.html.twig', [
            'users' => $users,
            'categories' => $categories,
            'contracts' => $contracts,
        ]);
    }

    /**
     * Client panel page.
     *
     * @Route("/client_account", name="app_client_panel")
     * @return Response The response instance.
     */
    public function panelClient(): Response
    {
        $contracts = $this->contractRepository->getAll();

        return $this->render('panels/client_panel.html.twig', [
            'contracts' => $contracts,
        ]);
    }

    /**
     * Specialist panel page.
     *
     * @Route("/specialist_account", name="app_specialist_panel")
     * @return Response The response instance.
     */
    public function panelSpecialist(): Response
    {
        $contracts = $this->contractRepository->getAll();

        return $this->render('panels/client_panel.html.twig', [
            'contracts' => $contracts,
        ]);
    }
}


?>
