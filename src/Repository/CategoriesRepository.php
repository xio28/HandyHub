<?php

namespace App\Repository;

use App\Document\CategoriesDocument;
use Doctrine\ODM\MongoDB\DocumentManager;
use Doctrine\ODM\MongoDB\DocumentManagerRegistry;
use Doctrine\ODM\MongoDB\Repository\DocumentRepository;

class CategoriesRepository extends DocumentRepository
{
    private $documentManager;

    public function __construct(DocumentManager $dm)
    {
        $this->documentManager = $dm;
        parent::__construct($dm, $dm->getUnitOfWork(), $dm->getClassMetadata(CategoriesDocument::class));
    }

    /**
     * Get all categories.
     *
     * @return CategoriesDocument[]
     */
    public function findAllCategories(): array
    {
        return $this->createQueryBuilder()
            ->select('id', 'category')
            ->getQuery()
            ->execute()
            ->toArray();
    }
}

?>
