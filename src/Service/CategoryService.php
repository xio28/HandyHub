<?php
namespace App\Service;

use App\Document\CategoriesDocument;
use App\Repository\CategoryRepository;
use Doctrine\ODM\MongoDB\DocumentManager;
use Psr\Log\LoggerInterface;
use Symfony\Component\HttpFoundation\Request;


class CategoryService {
    private $documentManager;
    private $categoryRepository;
    private $logger;

    public function __construct(
        DocumentManager $documentManager, 
        CategoryRepository $categoryRepository, 
        LoggerInterface $logger,
    ) {
        $this->documentManager = $documentManager;
        $this->categoryRepository = $categoryRepository;
        $this->logger = $logger;
    }

    public function registerCategory(Request $request)
    {
        try {
            $cat = new CategoriesDocument();
    
            $cat->setCategory($request->get('category'));
    
            $this->documentManager->persist($cat);
            $this->documentManager->flush();
    
            $this->logger->info('Category '. $cat->getId(). ' registered successfully');
    
            return $cat;
            
        } catch(Exception $e) {
            $this->logger->error('Category register failed: ' . $e->getMessage());
            return new Response('Ha habido un error al registrar la categoría. Por favor, inténtalo de nuevo.', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function deleteCategoryById(int $id): void
    {
        $category = $this->categoryRepository->findCategoryById($id);

        if ($category) {
            $this->documentManager->remove($category);
            $this->documentManager->flush();
        }
    }

    public function getCategories(Request $request)
    {
        try {
            //
        } catch(Exception $e) {
            $this->logger->error('User register failed: ' . $e->getMessage());
            return new Response('Ha habido un error al registrarte. Por favor, inténtalo de nuevo.', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

}
?>
