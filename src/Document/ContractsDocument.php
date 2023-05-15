<?php

namespace App\Document;

use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;

/**
 * @MongoDB\Document(collection="contracts")
 */
class ContractsDocument
{
    const STATUS_PENDING = 'pending';
    const STATUS_IN_PROGRESS = 'in_progress';
    const STATUS_COMPLETED = 'completed';
    const STATUS_REJECTED = 'rejected';

    /**
     * @MongoDB\Id
     */
    protected $id;

    /**
     * @MongoDB\ReferenceOne(targetDocument="UsersDocument")
     */
    protected $client;

    /**
     * @MongoDB\ReferenceOne(targetDocument="UsersDocument")
     */
    protected $specialist;

    /**
     * @MongoDB\Field(type="date")
     */
    protected $date;

    /**
     * @MongoDB\Field(type="date")
     */
    protected $hour_in;

    /**
     * @MongoDB\Field(type="date")
     */
    protected $hour_out;

    /**
     * @MongoDB\Field(type="float")
     */
    protected $min_price;

    /**
     * @MongoDB\Field(type="float")
     */
    protected $tax = 0.07;

    /**
     * @MongoDB\Field(type="float")
     */
    protected $total_price;

    /**
     * @MongoDB\Field(type="string")
     */
    protected $status = self::STATUS_PENDING;

    // Agrega getters y setters para cada propiedad aquí.
}


?>
