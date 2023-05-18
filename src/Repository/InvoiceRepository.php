<?php

namespace App\Repository;

use App\Document\ContractsDocument;
use App\Document\InvoicesDocument;
use Doctrine\ODM\MongoDB\DocumentManager;
use Doctrine\ODM\MongoDB\MongoDBException;

/**
 * Class InvoiceRepository
 *
 * Repository class for InvoicesDocument.
 */
class InvoiceRepository
{
    /**
     * @var DocumentManager
     */
    private $documentManager;

    /**
     * InvoiceRepository constructor.
     *
     * @param DocumentManager $documentManager The DocumentManager instance.
     */
    public function __construct(DocumentManager $documentManager)
    {
        $this->documentManager = $documentManager;
    }

    /**
     * Get all invoices.
     *
     * @return InvoicesDocument[]|null An array of InvoicesDocument instances, or null if none found.
     * @throws MongoDBException
     */
    public function getAll(): ?array
    {
        return $this->documentManager->getRepository(InvoicesDocument::class)->findAll();
    }

    /**
     * Get invoices by contract ID.
     *
     * @param int $contractId The ID of the contract.
     * @return InvoicesDocument[]|null An array of InvoicesDocument instances, or null if none found.
     * @throws MongoDBException
     */
    public function getInvoicesByContractId(int $contractId): ?array
    {
        $contract = $this->documentManager->getReference(ContractsDocument::class, $contractId);

        $invoices = $this->documentManager->getRepository(InvoicesDocument::class)->findBy(['contract' => $contract]);

        return $invoices;
    }
}

?>
