<?php

namespace App\EventSubscriber;

use Doctrine\ODM\MongoDB\Event\LifecycleEventArgs;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use App\Document\UsersDocument;

class UserDeletionSubscriber implements EventSubscriberInterface
{
    private $tokenStorage;

    public function __construct(TokenStorageInterface $tokenStorage)
    {
        $this->tokenStorage = $tokenStorage;
    }

    public function postRemove(LifecycleEventArgs $args)
    {
        $document = $args->getDocument();

        if (!$document instanceof UsersDocument) {
            return;
        }

        $token = $this->tokenStorage->getToken();
        
        // If token not null and 
        if ($token && $token->getUser() === $document) {
            $this->tokenStorage->setToken(null);
        }
    }

    public static function getSubscribedEvents()
    {
        return [
            'postRemove' => 'postRemove',
        ];
    }
}

?>
