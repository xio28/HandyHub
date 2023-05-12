<?php
namespace App\Service;

use App\Document\CategoriesDocument;
use App\Service\CategoryService;
use Doctrine\ODM\MongoDB\DocumentManager;
use Psr\Log\LoggerInterface;
use Symfony\Component\HttpFoundation\Request;


class CategoryService {
    private $documentManager;
    private $logger;
    private $publicDirectory;

    public function __construct(
        DocumentManager $documentManager, 
        LoggerInterface $logger,
        string $publicDirectory
    ) {
        $this->documentManager = $documentManager;
        $this->logger = $logger;
        $this->publicDirectory = $publicDirectory;
    }

    public function getCategories(Request $request)
    {
        try {
            //
        } catch(Exception $e) {
            $this->logger->error('User register failed: ' . $e->getMessage());
            return new Response('Ha habido un error al registrarte. Por favor, inténtalo de nuevo.', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

}
?>
