<?php
namespace App\Repository;

use App\Document\UsersDocument;
use Doctrine\ODM\MongoDB\DocumentManager;
use Doctrine\ODM\MongoDB\MongoDBException;

class UsersRepository
{
    private $documentManager;

    public function __construct(DocumentManager $documentManager)
    {
        $this->documentManager = $documentManager;
    }

    public function getAll(): ?UsersDocument
    {
        return $this->documentManager->getRepository(UsersDocument::class)->findAll();
    }

    public function findUserById(int $id): ?UsersDocument
    {
        return $this->documentManager->getRepository(UsersDocument::class)->findOneBy(['_id' => $id]);
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

    public function getRoleByEmail(string $email): ?string
    {
        $user = $this->findUserByEmail($email);

        return $user ? $user->getRole() : null;
    }

    // Otros métodos personalizados aquí...
}

?>
