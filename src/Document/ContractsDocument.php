<?php

namespace App\Document;

use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;

/**
 * @MongoDB\Document(collection="contracts")
 */
class ContractsDocument
{
    const STATUS_IN_PROGRESS = 'in_progress';
    const STATUS_COMPLETED = 'completed';
    const STATUS_REJECTED = 'rejected';

    /**
     * @MongoDB\Id(strategy="INCREMENT")
     */
    private $id;

    /**
     * @MongoDB\ReferenceOne(targetDocument=UsersDocument::class, storeAs="id")
     */
    private $client;

    /**
     * @MongoDB\ReferenceOne(targetDocument=UsersDocument::class, storeAs="id")
     */
    private $specialist;

    /**
     * @MongoDB\Field(type="date")
     */
    private $date;

    /**
     * @MongoDB\Field(type="date")
     */
    private $hourIn;

    /**
     * @MongoDB\Field(type="date")
     */
    private $hourOut;

    /**
     * @MongoDB\Field(type="float")
     */
    private $pricePerHour;

    /**
     * @MongoDB\Field(type="float")
     */
    private $tax = 0.07;

    /**
     * @MongoDB\Field(type="float")
     */
    private $totalPrice;

    /**
     * @MongoDB\Field(type="string")
     */
    private $status = self::STATUS_IN_PROGRESS;

    /**
     * Get the ID of the contract.
     *
     * @return int|null The ID of the contract, or null if it hasn't been set.
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * Get the client associated with the contract.
     *
     * @return UsersDocument|null The client, or null if it hasn't been set.
     */
    public function getClient(): ?UsersDocument
    {
        return $this->client;
    }

    /**
     * Set the client for the contract.
     *
     * @param UsersDocument|null $client The client to set.
     * @return self The contract, for chaining.
     */
    public function setClient(?UsersDocument $client): self
    {
        $this->client = $client;

        return $this;
    }

    /**
     * Get the specialist associated with the contract.
     *
     * @return UsersDocument|null The specialist, or null if it hasn't been set.
     */
    public function getSpecialist(): ?UsersDocument
    {
        return $this->specialist;
    }

    /**
     * Set the client for the contract.
     *
     * @param UsersDocument|null $client The client to set.
     * @return self The contract, for chaining.
     */
    public function setSpecialist(?UsersDocument $specialist): self
    {
        $this->specialist = $specialist;

        return $this;
    }

    public function getDate(): ?\DateTime
    {
        return $this->date;
    }

    public function setDate(?\DateTime $date): self
    {
        $this->date = $date;

        return $this;
    }

    public function getHourIn(): ?\DateTime
    {
        return $this->hourIn;
    }

    public function setHourIn(?\DateTime $hourIn): self
    {
        $this->hourIn = $hourIn;

        return $this;
    }

    public function getHourOut(): ?\DateTime
    {
        return $this->hourOut;
    }

    public function setHourOut(?\DateTime $hourOut): self
    {
        $this->hourOut = $hourOut;

        return $this;
    }

    public function getPricePerHour(): ?float
    {
        return $this->pricePerHour;
    }

    public function setPricePerHour(?float $pricePerHour): self
    {
        $this->pricePerHour = $pricePerHour;

        return $this;
    }

    public function getTax(): float
    {
        return $this->tax;
    }

    public function setTax(float $tax): self
    {
        $this->tax = $tax;

        return $this;
    }

    public function getTotalPrice(): ?float
    {
        return $this->totalPrice;
    }

    public function setTotalPrice(?float $totalPrice): self
    {
        $this->totalPrice = $totalPrice;

        return $this;
    }

    public function getStatus(): string
    {
        return $this->status;
    }

    public function setStatus(string $status): self
    {
        $this->status = $status;

        return $this;
    }
}


?>
