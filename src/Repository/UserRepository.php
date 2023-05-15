<?php

namespace App\Repository;

use App\Document\UsersDocument;
use Doctrine\ODM\MongoDB\DocumentManager;
use Doctrine\ODM\MongoDB\MongoDBException;

class UserRepository
{
    private $documentManager;

    public function __construct(DocumentManager $documentManager)
    {
        $this->documentManager = $documentManager;
    }

    public function getAll(): ?array
    {
        return $this->documentManager->getRepository(UsersDocument::class)->findAll();
    }

    public function findUserById(int $id): ?UsersDocument
    {
        return $this->documentManager->getRepository(UsersDocument::class)->find($id);
    }

    public function findUserByEmail(string $email): ?UsersDocument
    {
        return $this->documentManager->getRepository(UsersDocument::class)->findOneBy(['email' => $email]);
    }

    public function getIdByEmail(string $email): ?string
    {
        $user = $this->findUserByEmail($email);

        return $user ? $user->getId() : null;
    }

    public function getRoleByEmail(string $email): ?array
    {
        $user = $this->findUserByEmail($email);
    
        return $user ? $user->getRoles() : null;
    }

    public function getUsersByRole(string $role): ?array
    {
        return $this->documentManager->getRepository(UsersDocument::class)->findBy(['roles' => $role]);
    }

}

?>
