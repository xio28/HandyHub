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

/**
 * Class ContractController
 * 
 * This class provides actions for managing contracts.
 */
class ContractController extends AbstractController
{
    private $contractService;

    /**
     * ContractController constructor.
     * 
     * @param ContractService $contractService The contract service.
     * @param DocumentManager $documentManager The document manager.
     */
    public function __construct(ContractService $contractService, DocumentManager $documentManager) {
        $this->contractService = $contractService;
        $this->documentManager = $documentManager;
    }

    /**
     * @Route("/summary/contract", name="app_contract_summary")
     * @Security("is_granted('IS_AUTHENTICATED_FULLY')")
     *
     * Returns the contract summary page.
     *
     * @param Request $request The current request.
     * @return Response A Response instance.
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
     *
     * Starts a contract.
     *
     * @param Request $request The current request.
     * @return Response A Response instance.
     * @throws \Exception If there's an error in managing the contract.
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

    /**
     * @Route("/complete/contract/", name="app_contract_complete")
     *
     * Completes a contract.
     *
     * @param Request $request The current request.
     * @return Response|JsonResponse A Response or JsonResponse instance.
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
    
        return $this->redirectToRoute('app_specialist_panel');
    }
}
?>
