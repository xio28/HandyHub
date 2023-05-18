<?php

namespace App\Document;

use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;

/**
 * @MongoDB\Document(collection="invoices")
 *
 * This class represents the invoices collection in MongoDB
 */
class InvoicesDocument 
{
    /**
     * @MongoDB\Id(strategy="INCREMENT")
     * 
     * Represents the unique identifier for an invoice
     */
    private $id;

    /**
     * @MongoDB\ReferenceOne(targetDocument=ContractsDocument::class, storeAs="id")
     *
     * Represents the contract associated with an invoice.
     * It is a reference to the ContractsDocument.
     */
    private $contract;

    /**
     * @MongoDB\Field(type="string")
     *
     * Represents the path to the PDF file of an invoice.
     */
    private $invoicePdf;

    /**
     * Returns the ID of the invoice.
     *
     * @return int|null
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * Returns the contract associated with the invoice.
     *
     * @return ContractsDocument|null
     */
    public function getContract(): ?ContractsDocument
    {
        return $this->contract;
    }

    /**
     * Sets the contract associated with the invoice.
     *
     * @param ContractsDocument|null $contract
     * @return self
     */
    public function setContract(?ContractsDocument $contract): self
    {
        $this->contract = $contract;

        return $this;
    }

    /**
     * Returns the path to the PDF file of the invoice.
     *
     * @return string|null
     */
    public function getInvoicePdf(): ?string
    {
        return $this->invoicePdf;
    }

    /**
     * Sets the path to the PDF file of the invoice.
     *
     * @param string $invoicePdf
     * @return self
     */
    public function setInvoicePdf(string $invoicePdf): self
    {
        $this->invoicePdf = $invoicePdf;

        return $this;
    }
}

?>
