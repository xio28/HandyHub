<?php

namespace App\Repository;

use App\Document\ContractsDocument;
use Doctrine\ODM\MongoDB\DocumentManager;
use Doctrine\ODM\MongoDB\MongoDBException;

/**
 * Class ContractRepository
 *
 * Repository class for ContractsDocument.
 */
class ContractRepository
{
    /**
     * @var DocumentManager
     */
    private $documentManager;

    /**
     * ContractRepository constructor.
     *
     * @param DocumentManager $documentManager The DocumentManager instance.
     */
    public function __construct(DocumentManager $documentManager)
    {
        $this->documentManager = $documentManager;
    }

    /**
     * Get all contracts.
     *
     * @return ContractsDocument[]|null An array of ContractsDocument instances, or null if none found.
     * @throws MongoDBException
     */
    public function getAll(): ?array
    {
        return $this->documentManager->getRepository(ContractsDocument::class)->findAll();
    }

    /**
     * Get contracts by user ID.
     *
     * @param int $userId The ID of the user.
     * @return ContractsDocument[]|null An array of ContractsDocument instances, or null if none found.
     * @throws MongoDBException
     */
    public function getContractsByUserId(int $userId): ?array
    {
        $contractRepository = $this->documentManager->getRepository(ContractsDocument::class);

        $contracts = $contractRepository->findBy(['client' => $userId]);
        if (!$contracts) {
            $contracts = $contractRepository->findBy(['specialist' => $userId]);
        }

        return $contracts;
    }
}

?>
