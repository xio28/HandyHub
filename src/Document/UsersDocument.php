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
    private $address;

    /**
     * @MongoDB\Field(type="string")
     */
    private $telephone;

    /**
     * @MongoDB\Field(type="string")
     */
    private $role;

    /**
     * @MongoDB\ReferenceOne(targetDocument="CategoriesDocument", storeAs="id")
     */
    private $category;

    /**
     * @MongoDB\Field(type="string")
     */
    private $image;

    /**
     * @MongoDB\Field(type="bool")
     */
    private $policy = false;

    /**
     * @MongoDB\Field(type="bool")
     */
    private $isVerified = false;

    /**
     * @MongoDB\Field(type="string")
     */
    private $verificationToken;

    /**
     * @MongoDB\Field(type="string")
     */
    private $currentAccount;

    /**
     * @MongoDB\Field(type="hash")
     */
    private $creditCard;

    public function getId()
    {
        return $this->id;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function setEmail(string $email)
    {
        $this->email = $email;
    }

    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password)
    {
        $this->password = $password;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name)
    {
        $this->name = $name;
    }

    public function getSurname(): string
    {
        return $this->surname;
    }

    public function setSurname(string $surname)
    {
        $this->surname = $surname;
    }

    public function getAddress(): string
    {
        return $this->address;
    }

    public function setAddress(string $address)
    {
        $this->address = $address;
    }

    public function getTelephone(): string
    {
        return $this->telephone;
    }

    public function setTelephone(string $telephone)
    {
        $this->telephone = $telephone;
    }

    public function getRole(): string
    {
        return $this->role;
    }

    public function setRole(string $role)
    {
        $this->role = $role;
    }

    public function getCategory(): CategoriesDocument
    {
        return $this->category;
    }

    public function setCategory(CategoriesDocument $category)
    {
        $this->category = $category;
    }

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
    }

    public function getPolicy(): bool {
        return $this->policy;
    }

    public function setPolicy(bool $policy) {
        $this->policy = $policy;
    }

    public function getIsVerified(): bool {
        return $this->isVerified;
    }

    public function setIsVerfied(bool $verified) {
        $this->isVerified = $verified;
    }

    public function getCurrentAccount(): string
    {
        return $this->currentAccount;
    }

    public function setCurrentAccount(string $currentAccount)
    {
        $this->currentAccount = $currentAccount;
    }

    public function getCreditCard(): array
    {
        return $this->creditCard;
    }

    public function setCreditCard(array $creditCard)
    {
        $this->creditCard = $creditCard;
    }
    
}

?>
