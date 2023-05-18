<?php

namespace App\Service;

use App\Document\ContractsDocument;
use App\Document\InvoicesDocument;
use App\Document\UsersDocument;
use App\Repository\ContractRepository;
use App\Repository\UserRepository;
use Exception;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Doctrine\ODM\MongoDB\DocumentManager;
use Psr\Log\LoggerInterface;
use Knp\Snappy\Pdf;
use Twig\Environment;

/**
 * Class InvoiceService
 *
 * This service is responsible for generating invoices related operations
 */
class InvoiceService
{
    private $pdf;
    private $twig;
    private $documentManager;
    private $contractRepository;
    private $userRepository;
    private $logger;
    private $publicDirectory;

    /**
     * InvoiceService constructor.
     *
     * @param Pdf $pdf
     * @param Environment $twig
     * @param DocumentManager $documentManager
     * @param ContractRepository $contractRepository
     * @param UserRepository $userRepository
     * @param LoggerInterface $logger
     * @param string $publicDirectory
     */
    public function __construct(
        Pdf $pdf, 
        Environment $twig,
        DocumentManager $documentManager, 
        ContractRepository $contractRepository, 
        UserRepository $userRepository,
        LoggerInterface $logger,
        string $publicDirectory,
    ) {
        $this->pdf = $pdf;
        $this->twig = $twig;
        $this->documentManager = $documentManager;
        $this->contractRepository = $contractRepository;
        $this->userRepository = $userRepository;
        $this->logger = $logger;
        $this->publicDirectory = $publicDirectory;
    }

    /**
     * Generate an invoice for a contract
     * 
     * @param ContractsDocument $contract Contract for which to generate an invoice
     * @return Response|string Returns Response object in case of error, otherwise the filename of the invoice
     */
    public function generateInvoice($contract)
    {
        try {
            $invoice = new InvoicesDocument();
            $invoice->setContract($contract);
    
            $html = $this->twig->render('invoices/invoice.html.twig', [
                'contract' => $contract,
            ]);
            
            $this->documentManager->persist($invoice);
            $this->documentManager->flush();
            
            $resourcesPath = '/resources/invoices/';
    
            if (!is_dir($resourcesPath)) {
                mkdir($resourcesPath, 0777, true);
            }

            $filename = sprintf($resourcesPath . 'invoice_%s.pdf', $invoice->getId());

            $pdf = $this->pdf->getOutputFromHtml($html);

            file_put_contents($this->publicDirectory . $filename, $pdf);
            
            $invoice->setInvoicePdf($filename);
            
            $this->documentManager->persist($invoice);
            $this->documentManager->flush();

        } catch (Exception $e) {
            $this->logger->error('Error trying to gen invoice: ' . $e->getMessage());
            return new Response('Error trying to gen invoice.', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}

?>
