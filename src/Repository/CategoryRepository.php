<?php

namespace App\Repository;

use App\Document\CategoriesDocument;
use Doctrine\ODM\MongoDB\DocumentManager;


/**
 * Class CategoryRepository
 *
 * Repository class for CategoriesDocument.
 */
class CategoryRepository
{
    /**
     * @var DocumentManager
     */
    private $documentManager;

    /**
     * CategoryRepository constructor.
     *
     * @param DocumentManager $documentManager The DocumentManager instance.
     */
    public function __construct(DocumentManager $documentManager)
    {
        $this->documentManager = $documentManager;
    }

    /**
     * Get all categories.
     *
     * @return array|null An array of CategoriesDocument objects or null if no categories found.
     */
    public function getAll(): ?array
    {
        return $this->documentManager->getRepository(CategoriesDocument::class)->findAll();
    }

    /**
     * Find a category by its ID.
     *
     * @param int $id The ID of the category.
     * @return CategoriesDocument|null The CategoriesDocument object or null if not found.
     */
    public function findCategoryById(int $id): ?CategoriesDocument
    {
        return $this->documentManager->getRepository(CategoriesDocument::class)->find($id);
    }
}

?>
