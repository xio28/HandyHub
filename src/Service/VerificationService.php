<?php

namespace App\Service;

use App\Repository\UserRepository;
use Doctrine\ODM\MongoDB\DocumentManager;
use Psr\Log\LoggerInterface;

class VerificationService 
{
    private $userRepository;
    private $documentManager;
    private $logger;

    public function __construct(UserRepository $userRepository, DocumentManager $documentManager, LoggerInterface $logger) {
        $this->userRepository = $documentManager->getRepository(UsersDocument::class);
        $this->documentManager = $documentManager;
        $this->logger = $logger;
    }

    public function verifyUser($id) {
        try {
            $verified = $this->updateIsVerified($id, true);

            if ($verified) {
                return true;
            }

        } catch(Exception $e) {
            $this->logger->error('User verification failed: ' . $e->getMessage());
            return new Response('Ha habido un error al verficar tu cuenta. Por favor, contacta con soporte.', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function updateIsVerified(int $id, bool $isVerified) {
        $user = $this->userRepository->findUserById($id);

        try {
            $user->setIsVerified($isVerified);
            $this->documentManager->flush();
            
            return true;
        } catch(Exception $e) {
            $this->logger->error('User verification failed: ' . $e->getMessage());
            return new Response('Ha habido un error al verficar tu cuenta. Por favor, contacta con soporte.', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}

?>
