<?php

namespace App\Repository;

use App\Document\UsersDocument;
use Doctrine\ODM\MongoDB\DocumentManager;
use Doctrine\ODM\MongoDB\MongoDBException;

/**
 * Class UserRepository
 *
 * Repository class for UsersDocument.
 */
class UserRepository
{
    /**
     * @var DocumentManager
     */
    private $documentManager;

    /**
     * UserRepository constructor.
     *
     * @param DocumentManager $documentManager The DocumentManager instance.
     */
    public function __construct(DocumentManager $documentManager)
    {
        $this->documentManager = $documentManager;
    }

    /**
     * Get all users.
     *
     * @return UsersDocument[]|null An array of UsersDocument instances, or null if none found.
     * @throws MongoDBException
     */
    public function getAll(): ?array
    {
        return $this->documentManager->getRepository(UsersDocument::class)->findAll();
    }

    /**
     * Find a user by its ID.
     *
     * @param int $id The ID of the user.
     * @return UsersDocument|null The UsersDocument object or null if not found.
     * @throws MongoDBException
     */
    public function findUserById(int $id): ?UsersDocument
    {
        return $this->documentManager->getRepository(UsersDocument::class)->find($id);
    }

    /**
     * Find a user by its email.
     *
     * @param string $email The email of the user.
     * @return UsersDocument|null The UsersDocument object or null if not found.
     * @throws MongoDBException
     */
    public function findUserByEmail(string $email): ?UsersDocument
    {
        return $this->documentManager->getRepository(UsersDocument::class)->findOneBy(['email' => $email]);
    }

    /**
     * Get the ID of a user by email.
     *
     * @param string $email The email of the user.
     * @return string|null The ID of the user, or null if not found.
     * @throws MongoDBException
     */
    public function getIdByEmail(string $email): ?string
    {
        $user = $this->findUserByEmail($email);

        return $user ? $user->getId() : null;
    }

    /**
     * Get the roles of a user by email.
     *
     * @param string $email The email of the user.
     * @return array|null An array of roles of the user, or null if not found.
     * @throws MongoDBException
     */
    public function getRoleByEmail(string $email): ?array
    {
        $user = $this->findUserByEmail($email);

        return $user ? $user->getRoles() : null;
    }

    /**
     * Get users by role.
     *
     * @param string $role The role of the user.
     * @return UsersDocument[]|null An array of UsersDocument instances, or null if none found.
     * @throws MongoDBException
     */
    public function getUsersByRole(string $role): ?array
    {
        return $this->documentManager->getRepository(UsersDocument::class)->findBy(['roles' => $role]);
    }
}

?>
