<?php

namespace App\Document;

use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;


/**
 * Class ContractsDocument
 *
 * Represents a contract document.
 *
 * @MongoDB\Document(collection="contracts")
 */
class ContractsDocument
{
    const STATUS_IN_PROGRESS = 'in_progress';
    const STATUS_COMPLETED = 'completed';
    const STATUS_REJECTED = 'rejected';

    /**
     * @MongoDB\Id(strategy="INCREMENT")
     * @var int|null
     */
    private $id;

    /**
     * @MongoDB\ReferenceOne(targetDocument=UsersDocument::class, storeAs="id")
     * @var UsersDocument|null
     */
    private $client;

    /**
     * @MongoDB\ReferenceOne(targetDocument=UsersDocument::class, storeAs="id")
     * @var UsersDocument|null
     */
    private $specialist;

    /**
     * @MongoDB\Field(type="date")
     * @var \DateTime|null
     */
    private $date;

    /**
     * @MongoDB\Field(type="string")
     * @var string|null
     */
    private $hourIn;

    /**
     * @MongoDB\Field(type="string")
     * @var string|null
     */
    private $hourOut;

    /**
     * @MongoDB\Field(type="float")
     * @var float|null
     */
    private $pricePerHour;

    /**
     * @MongoDB\Field(type="float")
     * @var float
     */
    private $tax = 0.07;

    /**
     * @MongoDB\Field(type="float")
     * @var float|null
     */
    private $totalPrice;

    /**
     * @MongoDB\Field(type="string")
     * @var string
     */
    private $status = self::STATUS_IN_PROGRESS;

    /**
     * @MongoDB\Field(type="bool")
     * @var bool
     */
    private $paid;

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
     * @return ContractsDocument The contract, for chaining.
     */
    public function setClient(?UsersDocument $client): ContractsDocument
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
     * Set the specialist for the contract.
     *
     * @param UsersDocument|null $specialist The specialist to set.
     * @return ContractsDocument The contract, for chaining.
     */
    public function setSpecialist(?UsersDocument $specialist): ContractsDocument
    {
        $this->specialist = $specialist;

        return $this;
    }

    /**
     * Get the date of the contract.
     *
     * @return \DateTime|null The date of the contract, or null if it hasn't been set.
     */
    public function getDate(): ?\DateTime
    {
        return $this->date;
    }

    /**
     * Set the date for the contract.
     *
     * @param \DateTime|null $date The date to set.
     * @return ContractsDocument The contract, for chaining.
     */
    public function setDate(?\DateTime $date): ContractsDocument
    {
        $this->date = $date;

        return $this;
    }

    /**
     * Get the starting hour of the contract.
     *
     * @return string|null The starting hour of the contract, or null if it hasn't been set.
     */
    public function getHourIn(): ?string
    {
        return $this->hourIn;
    }

    /**
     * Set the starting hour for the contract.
     *
     * @param string|null $hourIn The starting hour to set.
     * @return ContractsDocument The contract, for chaining.
     */
    public function setHourIn(?string $hourIn): ContractsDocument
    {
        $this->hourIn = $hourIn;

        return $this;
    }

    /**
     * Get the ending hour of the contract.
     *
     * @return string|null The ending hour of the contract, or null if it hasn't been set.
     */
    public function getHourOut(): ?string
    {
        return $this->hourOut;
    }

    /**
     * Set the ending hour for the contract.
     *
     * @param string|null $hourOut The ending hour to set.
     * @return ContractsDocument The contract, for chaining.
     */
    public function setHourOut(?string $hourOut): ContractsDocument
    {
        $this->hourOut = $hourOut;

        return $this;
    }

    /**
     * Get the price per hour for the contract.
     *
     * @return float|null The price per hour for the contract, or null if it hasn't been set.
     */
    public function getPricePerHour(): ?float
    {
        return $this->pricePerHour;
    }

    /**
     * Set the price per hour for the contract.
     *
     * @param float|null $pricePerHour The price per hour to set.
     * @return ContractsDocument The contract, for chaining.
     */
    public function setPricePerHour(?float $pricePerHour): ContractsDocument
    {
        $this->pricePerHour = $pricePerHour;

        return $this;
    }

    /**
     * Get the tax for the contract.
     *
     * @return float The tax for the contract.
     */
    public function getTax(): float
    {
        return $this->tax;
    }

    /**
     * Set the tax for the contract.
     *
     * @param float $tax The tax to set.
     * @return ContractsDocument The contract, for chaining.
     */
    public function setTax(float $tax): ContractsDocument
    {
        $this->tax = $tax;

        return $this;
    }

    /**
     * Get the total price for the contract.
     *
     * @return float|null The total price for the contract, or null if it hasn't been set.
     */
    public function getTotalPrice(): ?float
    {
        return $this->totalPrice;
    }

    /**
     * Set the total price for the contract.
     *
     * @param float|null $totalPrice The total price to set.
     * @return ContractsDocument The contract, for chaining.
     */
    public function setTotalPrice(?float $totalPrice): ContractsDocument
    {
        $this->totalPrice = $totalPrice;

        return $this;
    }

    /**
     * Get the status of the contract.
     *
     * @return string The status of the contract.
     */
    public function getStatus(): string
    {
        return $this->status;
    }

    /**
     * Set the status for the contract.
     *
     * @param string $status The status to set.
     * @return ContractsDocument The contract, for chaining.
     */
    public function setStatus(string $status): ContractsDocument
    {
        $this->status = $status;

        return $this;
    }

    /**
     * Get the paid value of the contract.
     *
     * @return bool The paid of the contract.
     */
    public function getPaid(): bool
    {
        return $this->paid;
    }

    /**
     * Set the paid value for the contract.
     *
     * @param bool $paid The paid boolean to set.
     * @return ContractsDocument The contract, for chaining.
     */
    public function setPaid(bool $paid)
    {
        $this->paid = $paid;

        return $this;
    }
}

?>
