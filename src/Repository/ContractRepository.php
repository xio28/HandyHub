<?php

namespace App\Repository;

use App\Document\ContractsDocument;
use Doctrine\ODM\MongoDB\DocumentManager;
use Doctrine\ODM\MongoDB\MongoDBException;

class ContractRepository
{
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

    // /**
    //  * Check if the logged-in user ID matches the client ID in a contract.
    //  *
    //  * @param int $contractId The ID of the contract.
    //  * @param int $userId The ID of the logged-in user.
    //  * @return bool True if the IDs match, false otherwise.
    //  */
    // public function userInContract(int $contractId, int $userId): bool
    // {
    //     /** 
    //      * @var ContractsDocument $contract 
    //      */
    //     $contract = $this->documentManager->getRepository(ContractsDocument::class)->find($contractId);
        
    //     if ($contract && $contract->getClient()) {
    //         /** 
    //          * @var UsersDocument $client
    //          */
    //         $client = $contract->getClient();

    //         return $client->getId() === $userId;
    //     }
        
    //     return false;
    // }

}

?>
