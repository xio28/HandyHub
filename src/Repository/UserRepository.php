<?php
namespace App\Repository;

use App\Document\UsersDocument;
use Doctrine\ODM\MongoDB\MongoDBException;
use Doctrine\ODM\MongoDB\Repository\DocumentRepository;
use Psr\Log\LoggerInterface;

class UserRepository extends DocumentRepository
{
    private $logger;

    public function __construct(LoggerInterface $logger)
    {
        $this->logger = $logger;
    }

    public function getAll(): ?array
    {
        try {
            return $this->findAll();
        }  catch (MongoDBException $e) {
            $logger->error('Internal error while interacting with MongoDB: '.$e->getMessage());
        }
    }

    public function findUserById(int $id): ?UsersDocument
    {
        try {
            return $this->find($id);
        }  catch (MongoDBException $e) {
            $logger->error('Internal error while interacting with MongoDB: '.$e->getMessage());
        }
    }

    public function findUserByEmail(string $email): ?UsersDocument
    {
        try {
            return $this->findOneBy(['email' => $email]);
        }  catch (MongoDBException $e) {
            $logger->error('Internal error while interacting with MongoDB: '.$e->getMessage());
        }
    }

    public function getIdByEmail(string $email): ?string
    {
        try {
            $user = $this->findUserByEmail($email);

            return $user ? $user->getId() : null;
        }  catch (MongoDBException $e) {
            $logger->error('Internal error while interacting with MongoDB: '.$e->getMessage());
        }
    }

    public function getRoleByEmail(string $email): ?string
    {
        try {
            $user = $this->findUserByEmail($email);

            return $user ? $user->getRole() : null;
        }  catch (MongoDBException $e) {
            $logger->error('Internal error while interacting with MongoDB: '.$e->getMessage());
        }
    }

    public function getUsersByRole(string $role): ?array
    {
        try {
            return $this->findBy(['role' => $role]);
        }  catch (MongoDBException $e) {
            $logger->error('Internal error while interacting with MongoDB: '.$e->getMessage());
        }
    }
}

?>
