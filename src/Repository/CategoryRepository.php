<?php

namespace App\Repository;

use App\Document\CategoriesDocument;
use Doctrine\ODM\MongoDB\DocumentManager;

class CategoryRepository
{
    private $documentManager;

    public function __construct(DocumentManager $documentManager)
    {
        $this->documentManager = $documentManager;
    }

    public function getAll(): ?array
    {
        return $this->documentManager->getRepository(CategoriesDocument::class)->findAll();
    }

    public function findCategoryById(int $id): ?CategoriesDocument
    {
        return $this->documentManager->getRepository(CategoriesDocument::class)->find($id);
    }
}

?>
