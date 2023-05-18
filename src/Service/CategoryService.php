<?php
namespace App\Service;

use App\Document\CategoriesDocument;
use App\Repository\CategoryRepository;
use Doctrine\ODM\MongoDB\DocumentManager;
use Psr\Log\LoggerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class CategoryService
 *
 * Service class for managing categories.
 */
class CategoryService
{
    /**
     * @var DocumentManager
     */
    private $documentManager;

    /**
     * @var CategoryRepository
     */
    private $categoryRepository;

    /**
     * @var LoggerInterface
     */
    private $logger;

    /**
     * CategoryService constructor.
     *
     * @param DocumentManager $documentManager The DocumentManager instance.
     * @param CategoryRepository $categoryRepository The CategoryRepository instance.
     * @param LoggerInterface $logger The LoggerInterface instance.
     */
    public function __construct(
        DocumentManager $documentManager,
        CategoryRepository $categoryRepository,
        LoggerInterface $logger
    ) {
        $this->documentManager = $documentManager;
        $this->categoryRepository = $categoryRepository;
        $this->logger = $logger;
    }

    /**
     * Register a new category.
     *
     * @param Request $request The HTTP request object.
     * @return CategoriesDocument|Response The registered CategoriesDocument instance or a Response object in case of error.
     */
    public function registerCategory(Request $request)
    {
        try {
            $cat = new CategoriesDocument();

            $cat->setCategory($request->get('category'));

            $this->documentManager->persist($cat);
            $this->documentManager->flush();

            $this->logger->info('Category ' . $cat->getId() . ' registered successfully');

            return $cat;

        } catch (Exception $e) {
            $this->logger->error('Category register failed: ' . $e->getMessage());
            return new Response('Ha habido un error al registrar la categoría. Por favor, inténtalo de nuevo.', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Update a category by its ID.
     *
     * @param int $id The ID of the category.
     * @param string $name The new name of the category.
     * @return CategoriesDocument|null The updated CategoriesDocument instance or null if not found.
     */
    public function updateCategoryById(int $id, string $name): ?CategoriesDocument
    {
        $category = $this->categoryRepository->findCategoryById($id);

        if ($category !== null) {
            $category->setCategory($name);
            $this->documentManager->flush();
        }

        return $category;
    }

    /**
     * Delete a category by its ID.
     *
     * @param int $id The ID of the category.
     */
    public function deleteCategoryById(int $id): void
    {
        $category = $this->categoryRepository->findCategoryById($id);

        if ($category) {
            $this->documentManager->remove($category);
            $this->documentManager->flush();
        }
    }

    /**
     * Get categories.
     *
     * @param Request $request The HTTP request object.
     */
    public function getCategories(Request $request)
    {
        try {
            //
        } catch (Exception $e) {
            $this->logger->error('User register failed: ' . $e->getMessage());
            return new Response('Ha habido un error al registrarte. Por favor, inténtalo de nuevo.', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
?>
