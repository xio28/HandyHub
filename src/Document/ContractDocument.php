<?php

// src/Document/ClientSpecialistContract.php
namespace App\Document;

use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;

/**
 * @MongoDB\Document(collection="contracts")
 */
class ContractsDocument
{
    /**
     * @MongoDB\Id
     */
    protected $id;

    /**
     * @MongoDB\ReferenceOne(targetDocument="User")
     */
    protected $client;

    /**
     * @MongoDB\ReferenceOne(targetDocument="User")
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
    protected $price;

    // Agrega getters y setters para cada propiedad aquí.
}

?>
