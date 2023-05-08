<?php

namespace App\Document;

use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;

/**
 * @MongoDB\Document(collection="users")
 */
class UsersDocument {

    /**
     * @MongoDB\Id(strategy="INCREMENT")
     */
    private $id;

    /**
     * @MongoDB\Field(type="string")
     */
    private $email;

    /**
     * @MongoDB\Field(type="string")
     */
    private $password;

    /**
     * @MongoDB\Field(type="string")
     */
    private $name;

    /**
     * @MongoDB\Field(type="string")
     */
    private $surname;

    /**
     * @MongoDB\Field(type="string")
     */
    private $role;

    /**
     * @MongoDB\ReferenceOne(targetDocument="Category", storeAs="id")
     */
    private $category;
}

?>
