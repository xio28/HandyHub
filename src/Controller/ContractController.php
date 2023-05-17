<?php
namespace App\Controller;

use App\Service\ContractService;
use App\Service\InvoiceService;
use Psr\Log\LoggerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ContractController extends AbstractController
{
    private $contractService;

    public function __construct(ContractService $contractService) {
        $this->contractService = $contractService;
    }

    /**
     * @Route("/summary/contract", name="app_contract_summary")
     * @Security("is_granted('IS_AUTHENTICATED_FULLY')")
     */
    public function summaryContract(Request $request, LoggerInterface $logger)
    {
        $user = $this->getUser();
        $roles = $user->getRoles();
        
        $clientId = $request->get('clientId');
        $specialistId = $request->get('specialistId');
    
        if (in_array('ROLE_SPECIALIST', $roles)) {
            return $this->redirectToRoute('app_index');
        }
    
        $info = $this->contractService->preContract($request);
        $logger->info(var_export($info, true));
    
        return $this->render('contract/start_contract.html.twig', [
            'clients' => $info['clients'],
            'specialists' => $info['specialists'],
            'date' => $info['date'],
            'hour' => $info['hour']
        ]);
    }


    /**
     * @Route("/start/contract", name="app_contract_start")
     */
    public function startContract(Request $request)
    {
        $success = $this->contractService->registerContract($request);
        
        if ($success) {
            return $this->redirectToRoute('app_index');
        } else {
            throw new \Exception('Ha habido un error al registrarte. Por favor, inténtalo de nuevo.');
        }
    }

    /**
     * @Route("/reject/contract/{id}", name="app_contract_reject")
     */
    public function rejectContract(int $id)
    {
        $success = $this->contractService->cancelContract($id);
    }

    /**
     * @Route("/complete/contract/{id}", name="app_contract_reject")
     */
    public function rejectContract(int $id)
    {
        
    }

    // /**
    //  * @Route("/finish/contract/", name="app_contract_finish")
    //  */
    // public function finalize($id): Response
    // {
    //     // Aquí buscarías el contrato por su id, por ejemplo:
    //     $contract = $this->getDoctrine()->getRepository(Contract::class)->find($id);

    //     // Asegúrate de que el contrato existe y de que puede ser finalizado

    //     // Generar la factura en PDF
    //     $pdf = $invoiceGenerator->generateInvoice($contract);

    //     // Aquí deberías marcar el contrato como finalizado y guardar los cambios en la base de datos

    //     // Devolver la factura en PDF como respuesta
    //     return new Response(
    //         $pdf,
    //         200,
    //         [
    //             'Content-Type' => 'application/pdf',
    //             'Content-Disposition' => 'inline; filename="invoice.pdf"'
    //         ]
    //     );
    // }

    // /**
    //  * @Route("/finish/contract/{id}", name="app_contract_finish")
    //  */
    // public function finalize($id, InvoiceGenerator $invoiceGenerator): Response
    // {
    //     // Aquí buscarías el contrato por su id, por ejemplo:
    //     $contract = $this->getDoctrine()->getRepository(Contract::class)->find($id);

    //     // Asegúrate de que el contrato existe y de que puede ser finalizado

    //     // Generar la factura en PDF
    //     $pdf = $invoiceGenerator->generateInvoice($contract);

    //     // Aquí deberías marcar el contrato como finalizado y guardar los cambios en la base de datos

    //     // Devolver la factura en PDF como respuesta
    //     return new Response(
    //         $pdf,
    //         200,
    //         [
    //             'Content-Type' => 'application/pdf',
    //             'Content-Disposition' => 'inline; filename="invoice.pdf"'
    //         ]
    //     );
    // }
}
?>
