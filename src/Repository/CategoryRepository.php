<?php

namespace App\Repository;

use App\Document\CategoriesDocument;
use Doctrine\ODM\MongoDB\DocumentManager;
use Doctrine\ODM\MongoDB\Repository\DocumentRepository;

class CategoryRepository extends DocumentRepository
{
    private $documentManager;

    public function __construct(DocumentManager $documentManager)
    {
        $this->documentManager = $documentManager;
    }

    public function getAll(): ?UsersDocument
    {
        return $this->documentManager->getRepository(CategoriesDocument::class)->findAll();
    }

}

?>
