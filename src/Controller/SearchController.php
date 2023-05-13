<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class SearchController extends AbstractController
{
    /**
     * @Route("/search/user", name="app_search_user", methods={"GET"})
     */
    public function searchAction(Request $request)
    {
        $query = $request->query->get('query');
        $repository = $this->get('doctrine_mongodb')
            ->getManager()
            ->getRepository('App:UsersDocument');
        $users = $repository->createQueryBuilder()
            ->field('name')->equals(new \MongoDB\BSON\Regex($query, 'i')) // 'i' es para ignorar mayúsculas y minúsculas
            ->getQuery()
            ->execute();

        if($request->isXmlHttpRequest()) { // Si la petición es AJAX
            $jsonData = array();
            $i = 0;
            foreach($users as $user) {
                $temp = array(
                    'id' => $user->getId(),
                    'name' => $user->getName(),
                    'surname' => $user->getSurname(),
                    'email' => $user->getEmail(),
                    'telephone' => $user->getTelephone(),
                    'role' => $user->setRole(),
                    'category' => $user->getCategory(),
                    'isVerified' => $user->getIsVerified()
                );
                $jsonData[$i++] = $temp;
            }
            return new Response(json_encode($jsonData));
        } else {
            $this->addFlash('error', 'La función de búsqueda sólo puede ser utilizada con JavaScript habilitado.');
            return $this->redirectToRoute('search_page');
        }
    }
}
