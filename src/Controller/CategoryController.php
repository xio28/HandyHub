<?php

namespace App\Controller;

use App\Service\CategoryService;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * Class CategoryController
 *
 * This class provides actions for managing categories.
 */
class CategoryController extends AbstractController
{
    private $serializer;

    /**
     * CategoryController constructor.
     *
     * @param SerializerInterface $serializer The serializer.
     */
    public function __construct(SerializerInterface $serializer)
    {
        $this->serializer = $serializer;
    }

    /**
     * @Route("/register/categories", name="app_categories_register", methods={"POST"})
     *
     * Registers a category.
     *
     * @param Request $request The current request.
     * @param CategoryService $categoryService The category service.
     * @return JsonResponse A JsonResponse instance.
     * @throws \Exception If there's an error in registering the category.
     */
    public function registerCategory(Request $request, CategoryService $categoryService)
    {
        $category = $categoryService->registerCategory($request);
        
        if ($category !== null) {
            $categoryArray = $this->serializer->normalize($category, null, ['groups' => 'category']);
            return new JsonResponse($categoryArray);
        } else {
            throw new \Exception('Category register error. Try again later.');
        }
    }

    /**
     * @Route("/delete_category/{id}", name="app_delete_category", methods={"DELETE"})
     *
     * Deletes a category by id.
     *
     * @param int $id The category id.
     * @param CategoryService $categoryService The category service.
     * @return JsonResponse A JsonResponse instance.
     */
    public function deleteCategory(int $id, CategoryService $categoryService): Response
    {
        $categoryService->deleteCategoryById($id);

        return new JsonResponse(['success' => true]);
    }

    /**
     * @Route("/update_category/{id}", name="app_update_category", methods={"PUT"})
     *
     * Updates a category by id.
     *
     * @param Request $request The current request.
     * @param int $id The category id.
     * @param CategoryService $categoryService The category service.
     * @return JsonResponse A JsonResponse instance.
     */
    public function updateCategory(Request $request, int $id, CategoryService $categoryService): Response
    {
        $name = $request->request->get('name');

        try {
            $category = $categoryService->updateCategoryById($id, $name);

            return new JsonResponse(['success' => true, 'category' => $category]);

        } catch (Exception $e) {
            $this->logger->error('Category update failed: ' . $e->getMessage());
            return new JsonResponse(['success' => false, 'message' => 'Updated error.'], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }


    /**
     * @Route("/get/categories", name="app_get_categories")
     *
     * Retrieves or registers categories based on the request method.
     *
     * @param Request $request The current request.
     * @return Response|RedirectResponse A Response or RedirectResponse instance.
     */
    public function getCategories(Request $request)
    {
        if ($request->isMethod('POST')) {
            $success = $categoryService->registerClient($request);
            
            if ($success) {
                return $this->redirectToRoute('app_index');
            } else {
                throw new \Exception('Error when trying to get categories.');
            }
        } 

        return $this->render('register/register.html.twig', [
            'controllerName' => 'app_client_register'
        ]);
    }
}

?>
