<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\UserRepository;

class PanelController extends AbstractController
{
    private $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }
    /**
     * @Route("/admin", name="app_admin_panel")
     * @Security("is_granted('ROLE_ADMIN') or is_granted('ROLE_SUPERADMIN')")
     */
    public function panelAdmin(): Response
    {
        $users = $this->userRepository->getAll();

        return $this->render('panels/admin_panel.html.twig', [
            'users' => $users
        ]);
    }

    /**
     * @Route("/client_account", name="app_client_panel")
     */
    public function panelClient(): Response
    {
        $users = $this->userRepository->getAll();

        return $this->render('panels/client_panel.html.twig', [
            // 'users' => $users
        ]);
    }

    /**
     * @Route("/specialist_account", name="app_specialist_panel")
     */
    public function panelSpecialist(): Response
    {
        $users = $this->userRepository->getAll();

        return $this->render('panels/specialist_panel.html.twig', [
            // 'users' => $users
        ]);
    }
}

?>
