<?php
namespace App\Controller;

use App\Document\ContractsDocument;
use App\Service\ContractService;
use App\Service\InvoiceService;
use Doctrine\ODM\MongoDB\DocumentManager;
use Psr\Log\LoggerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ContractController extends AbstractController
{
    private $contractService;

    public function __construct(ContractService $contractService, DocumentManager $documentManager) {
        $this->contractService = $contractService;
        $this->documentManager = $documentManager;
    }

    /**
     * @Route("/summary/contract", name="app_contract_summary")
     * @Security("is_granted('IS_AUTHENTICATED_FULLY')")
     */
    public function summaryContract(Request $request)
    {
        $user = $this->getUser();
        $roles = $user->getRoles();
        
        $clientId = $request->get('clientId');
        $specialistId = $request->get('specialistId');
    
        if (in_array('ROLE_SPECIALIST', $roles) || in_array('ROLE_ADMIN', $roles) || in_array('ROLE_SUPERADMIN', $roles)) {
            return $this->redirectToRoute('app_index');
        }
    
        $info = $this->contractService->preContract($request);
        
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
            return $this->redirectToRoute('app_client_panel');
        } else {
            throw new \Exception('Error in managing contract.');
        }
    }

    // /**
    //  * @Route("/reject/contract/{id}", name="app_contract_reject")
    //  */
    // public function rejectContract(int $id)
    // {
    //     $success = $this->contractService->cancelContract($id);
    // }

    /**
     * @Route("/complete/contract/", name="app_contract_complete")
     */
    public function completeContract(Request $request)
    {
        $contractId = $request->get('contractId');
        $contract = $this->documentManager->getRepository(ContractsDocument::class)->find($contractId);

        if ($contract === null) {
            return new JsonResponse([
                'success' => false, 
                'message' => 'Contract not found'
            ], 
            404);
        }

        $result = $this->contractService->finishContract($contract);
        
        if ($result instanceof Response) {
            return $result;
        }

        return new JsonResponse(['success' => true]);
    }
}
?>
