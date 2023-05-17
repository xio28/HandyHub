<?php

namespace App\Document;

use App\Document\CategoriesDocument;
use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @MongoDB\Document(collection="users")
 */
class UsersDocument implements UserInterface, PasswordAuthenticatedUserInterface
{
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
     * @MongoDB\Field(type="collection")
     */
    private $roles = [];

    /**
     * @MongoDB\ReferenceOne(targetDocument=CategoriesDocument::class, storeAs="id")
     */
    private $category;

    /**
     * @MongoDB\Field(type="string")
     */
    private $image;

    /**
     * @MongoDB\Field(type="float")
     */
    private $pricePerHour;

    /**
     * @MongoDB\Field(type="bool")
     */
    private $policy;

    /**
     * @MongoDB\Field(type="bool")
     */
    private $isAvailable;

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

    /**
     * Returns the user identifier (email).
     *
     * @return string The user identifier (email).
     */
    public function getUserIdentifier(): string
    {
        return $this->email;
    }

    /**
     * Get the ID of the user.
     *
     * @return mixed The ID of the user.
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Get the email of the user.
     *
     * @return string The email of the user.
     */
    public function getEmail(): string
    {
        return $this->email;
    }

    /**
     * Set the email of the user.
     *
     * @param string $email The email to set.
     */
    public function setEmail(string $email)
    {
        $this->email = $email;
    }

    /**
     * Get the password of the user.
     *
     * @return string The password of the user.
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    /**
     * Set the password of the user.
     *
     * @param string $password The password to set.
     */
    public function setPassword(string $password)
    {
        $this->password = $password;
    }

    /**
     * Get the name of the user.
     *
     * @return string The name of the user.
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * Set the name of the user.
     *
     * @param string $name The name to set.
     */
    public function setName(string $name)
    {
        $this->name = $name;
    }

    /**
     * Get the surname of the user.
     *
     * @return string The surname of the user.
     */
    public function getSurname(): string
    {
        return $this->surname;
    }

    /**
     * Set the surname of the user.
     *
     * @param string $surname The surname to set.
     */
    public function setSurname(string $surname)
    {
        $this->surname = $surname;
    }

    /**
     * Get the address of the user.
     *
     * @return string|null The address of the user, or null if not set.
     */
    public function getAddress(): ?string
    {
        return $this->address;
    }

    /**
     * Set the address of the user.
     *
     * @param string $address The address to set.
     */
    public function setAddress(string $address)
    {
        $this->address = $address;
    }

    /**
     * Get the telephone number of the user.
     *
     * @return string|null The telephone number of the user, or null if not set.
     */
    public function getTelephone(): ?string
    {
        return $this->telephone;
    }

    /**
     * Set the telephone number of the user.
     *
     * @param string $telephone The telephone number to set.
     */
    public function setTelephone(string $telephone)
    {
        $this->telephone = $telephone;
    }

    /**
     * Get the roles assigned to the user.
     *
     * @return array The roles assigned to the user.
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    /**
     * Set the roles for the user.
     *
     * @param array $roles The roles to set.
     * @return self The current UsersDocument instance for method chaining.
     */
    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * Get the category associated with the user.
     *
     * @return CategoriesDocument|null The category associated with the user, or null if not set.
     */
    public function getCategory(): ?CategoriesDocument
    {
        return $this->category;
    }

    /**
     * Set the category for the user.
     *
     * @param CategoriesDocument|null $category The category to set.
     */
    public function setCategory(?CategoriesDocument $category)
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
    public function setImage(?string $image)
    {
        $this->image = $image;

        return $this;
    }

    /**
     * Get the price per hour for the user.
     *
     * @return float|null The price per hour for the user, or null if not set.
     */
    public function getPricePerHour(): ?float
    {
        return $this->pricePerHour;
    }

    /**
     * Set the price per hour for the user.
     *
     * @param float $pricePerHour The price per hour to set.
     */
    public function setPricePerHour(float $pricePerHour)
    {
        $this->pricePerHour = $pricePerHour;
    }

    /**
     * Get the policy status of the user.
     *
     * @return bool|null The policy status of the user, or null if not set.
     */
    public function getPolicy(): ?bool
    {
        return $this->policy;
    }

    /**
     * Set the policy status for the user.
     *
     * @param bool $policy The policy status to set.
     */
    public function setPolicy(bool $policy)
    {
        $this->policy = $policy;
    }

    /**
     * Get the availability status of the user.
     *
     * @return bool|null The availability status of the user, or null if not set.
     */
    public function getIsAvailable(): ?bool
    {
        return $this->isAvailable;
    }

    /**
     * Set the availability status for the user.
     *
     * @param bool $isAvailable The availability status to set.
     */
    public function setIsAvailable(bool $isAvailable)
    {
        $this->isAvailable = $isAvailable;
    }

    /**
     * Get the verification status of the user.
     *
     * @return bool|null The verification status of the user, or null if not set.
     */
    public function getIsVerified(): ?bool
    {
        return $this->isVerified;
    }

    /**
     * Set the verification status for the user.
     *
     * @param bool $verified The verification status to set.
     */
    public function setIsVerified(bool $verified)
    {
        $this->isVerified = $verified;
    }

    /**
     * Get the verification token for the user.
     *
     * @return string|null The verification token for the user, or null if not set.
     */
    public function getVerificationToken(): ?string
    {
        return $this->verificationToken;
    }

    /**
     * Set the verification token for the user.
     *
     * @param string $verificationToken The verification token to set.
     */
    public function setVerificationToken(string $verificationToken)
    {
        $this->verificationToken = $verificationToken;
    }

    /**
     * Get the current account for the user.
     *
     * @return string|null The current account for the user, or null if not set.
     */
    public function getCurrentAccount(): ?string
    {
        return $this->currentAccount;
    }

    /**
     * Set the current account for the user.
     *
     * @param string $currentAccount The current account to set.
     */
    public function setCurrentAccount(string $currentAccount)
    {
        $this->currentAccount = $currentAccount;
    }

    /**
     * Get the credit card information for the user.
     *
     * @return array|null The credit card information for the user, or null if not set.
     */
    public function getCreditCard(): ?array
    {
        return $this->creditCard;
    }

    /**
     * Set the credit card information for the user.
     *
     * @param array $creditCard The credit card information to set.
     */
    public function setCreditCard(array $creditCard)
    {
        $this->creditCard = $creditCard;
    }

    /**
     * Get the username (email) of the user.
     *
     * @return string The username (email) of the user.
     */
    public function getUsername(): string
    {
        return $this->email;
    }

    /**
     * Get the salt for the user.
     *
     * @return string|null The salt for the user, or null if not used.
     */
    public function getSalt(): ?string
    {
        return null;
    }

    /**
     * Erase sensitive user data.
     */
    public function eraseCredentials(): void
    {
        // Implement logic to erase sensitive user data, if necessary.
    }
}
