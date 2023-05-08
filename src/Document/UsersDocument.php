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

    /**
     * @MongoDB\Field(type="string")
     */
    private $image;

    /**
     * Get the image path associated with the user.
     *
     * @return string|null The image path or null if not set.
     */
    public function getImage(): ?string
    {
        return $this->image;
    }
    
    /**
     * Set the image path for the user.
     *
     * @param string|null $image The image path or null to unset it.
     * @return self Returns the current UsersDocument instance for method chaining.
     */
    public function setImage(?string $image): self
    {
        $this->image = $image;

        return $this;
    }
    
}

?>
