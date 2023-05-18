<?php
namespace App\Controller;

use Exception;
use Psr\Log\LoggerInterface;
use App\Document\ContractsDocument;
use App\Repository\InvoiceRepository;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * Class ContractController
 * 
 * This class provides actions for managing contracts.
 */
class InvoiceController extends AbstractController
{
    private $logger;
    private $contractService;
    private $documentManager;
    private $publicDirectory;

    /**
     * ContractController constructor.
     * 
     * @param LoggerInterface $logger The logger service.
     * @param DocumentManager $documentManager The document manager.
     * @param string $publicDirectory Absolute path.
     */
    public function __construct(LoggerInterface $logger, DocumentManager $documentManager, 
    string $publicDirectory,) 
    {
        $this->logger = $logger;
        $this->documentManager = $documentManager;
        $this->publicDirectory = $publicDirectory;
    }

    /**
     * Handles the request for the contact page ("/invoice/{contractId}") passing contractId.
     *
     * @Route("/invoice/{contractId}", name="app_get_invoice")
     * @return Response
     */
    public function getInvoice(int $contractId, InvoiceRepository $invoiceRepository)
    {
        try {
            $invoices = $invoiceRepository->getInvoicesByContractId($contractId);
    
            if (empty($invoices)) {
                throw $this->createNotFoundException('No se encontró la factura para el contrato proporcionado.');
            }
        
            $invoice = $invoices[0];
            $pdfPath = $this->publicDirectory . '/' . $invoice->getInvoicePdf();
        
            if (!file_exists($pdfPath)) {
                throw $this->createNotFoundException('El archivo de la factura no se encontró.');
            }
        
            return new BinaryFileResponse($pdfPath);
        } catch (Exception $e) {
            $this->logger->error($e->getMessage());
        }
    }
}

?>
    
