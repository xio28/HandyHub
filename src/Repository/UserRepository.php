<?php
namespace App\Repository;

use App\Document\UsersDocument;
use Doctrine\ODM\MongoDB\MongoDBException;
use Doctrine\ODM\MongoDB\Repository\DocumentRepository;
use Psr\Log\LoggerInterface;

class UserRepository extends DocumentRepository
{
    
    public function getAll(): ?array
    {
        try {
            return $this->findAll();
        }  catch (MongoDBException $e) {
            $logger->error('Error al interactuar con MongoDB: '.$e->getMessage());
        }
    }

    public function findUserById(int $id): ?UsersDocument
    {
        try {
            return $this->find($id);
        }  catch (MongoDBException $e) {
            $logger->error('Error al interactuar con MongoDB: '.$e->getMessage());
        }
    }

    public function findUserByEmail(string $email): ?UsersDocument
    {
        return $this->findOneBy(['email' => $email]);
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

    public function getUsersByRole(string $role): ?array
    {
        return $this->findBy(['role' => $role]);
    }
}

?>
