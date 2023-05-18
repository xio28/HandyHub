<?php
namespace App\Service;

use App\Document\ContractsDocument;
use App\Document\UsersDocument;
use App\Repository\ContractRepository;
use App\Repository\UserRepository;
use App\Service\InvoiceService;
use Doctrine\ODM\MongoDB\DocumentManager;
use Psr\Log\LoggerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

/**
 * Class ContractService
 * 
 * Service class to manage contract lifecycle.
 */
class ContractService {
    /**
     * @var InvoiceService
     */
    private $invoiceService;

    /**
     * @var DocumentManager
     */
    private $documentManager;

    /**
     * @var ContractRepository
     */
    private $contractRepository;

    /**
     * @var UserRepository
     */
    private $userRepository;

    /**
     * @var LoggerInterface
     */
    private $logger;

    /**
     * @var SessionInterface
     */
    private $session;

    /**
     * ContractService constructor.
     * @param InvoiceService $invoiceService
     * @param DocumentManager $documentManager
     * @param ContractRepository $contractRepository
     * @param UserRepository $userRepository
     * @param LoggerInterface $logger
     * @param SessionInterface $session
     */
    public function __construct(
        InvoiceService $invoiceService,
        DocumentManager $documentManager, 
        ContractRepository $contractRepository, 
        UserRepository $userRepository,
        LoggerInterface $logger,
        SessionInterface $session,
    ) {
        $this->invoiceService = $invoiceService;
        $this->documentManager = $documentManager;
        $this->contractRepository = $contractRepository;
        $this->userRepository = $userRepository;
        $this->logger = $logger;
        $this->session = $session;
    }

    /**
     * Registers a contract in the system
     *
     * @return bool|Response True if successful, or an HTTP response indicating an error.
     */
    public function registerContract()
    {
        try {
            $preContract = $this->session->get('preContract');
    
            $contract = new ContractsDocument();
    
            $clientId = (int) $preContract['clients']['id'];
            $specialistId = (int) $preContract['specialists']['id'];
            $client = $this->documentManager->getRepository(UsersDocument::class)->find($clientId);
            $specialist = $this->documentManager->getRepository(UsersDocument::class)->find($specialistId);
    
            $contract->setClient($client);
            $contract->setSpecialist($specialist);
    
            $specialist->setIsAvailable(false);
            $this->documentManager->persist($specialist);
    
            $date = new \DateTime($preContract['date']);
            $contract->setDate($date);
    
            $hourIn = $preContract['hour'];
            $contract->setHourIn($hourIn);
    
            $contract->setPricePerHour($preContract['specialists']['pricePerHour']);
            $contract->setStatus(ContractsDocument::STATUS_IN_PROGRESS);
            $contract->setPaid(false);
    
            $totalPrice = $preContract['specialists']['pricePerHour'] + ($preContract['specialists']['pricePerHour'] * $contract->getTax());
            $contract->setTotalPrice($totalPrice);
    
            $this->documentManager->persist($contract);
            $this->documentManager->flush();
    
            return true;
    
        } catch (Exception $e) {
            $this->logger->error('Contract register failed: ' . $e->getMessage());
            return new Response('Contract register failed.', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
    

    /**
     * Prepares a pre-contract based on a given request.
     *
     * @param Request $request The request containing the data needed to create the pre-contract.
     * @return array|Response An array containing the pre-contract data if successful, or an HTTP response indicating an error.
     */
    public function preContract(Request $request)
    {
        try {
            $clients = $this->userRepository->getUsersByRole('ROLE_CLIENT');
            $specialists = $this->userRepository->getUsersByRole('ROLE_SPECIALIST');
    
            $clientData = [];
            $clientId = (int) $request->get('clientId');

            foreach ($clients as $client) {
                if ($client->getId() === $clientId) {
                    $clientData = [
                        'id' => $client->getId(),
                        'name' => $client->getName(),
                        'surname' => $client->getSurname(),
                        'address' => $client->getAddress(),
                        'telephone' => $client->getTelephone()
                    ];
                    
                    break;
                }
            }
    
            $specialistData = [];
            $specialistId = (int) $request->get('specialistId');
            
            foreach ($specialists as $specialist) {
                if ($specialist->getId() === $specialistId) {
                    $pricePerHour = $specialist->getPricePerHour();
                    $priceWithTax = $pricePerHour + ($pricePerHour * 0.07);
                    
                    $category = $specialist->getCategory();
                    $categoryName = $category ? $category->getCategory() : null;
                    
                    $specialistData = [
                        'id' => $specialist->getId(),
                        'name' => $specialist->getName(),
                        'surname' => $specialist->getSurname(),
                        'pricePerHour' => $specialist->getPricePerHour(),
                        'category' => $categoryName,
                        'telephone' => $specialist->getTelephone(),
                        'total' => $priceWithTax,
                    ];
                    
                    break;
                }
            }
    
            $adjustedDateTime = $this->getAdjustedDateTime();
    
            $this->session->set('preContract', [
                'clients' => $clientData,
                'specialists' => $specialistData,
                'date' => $adjustedDateTime['date'],
                'hour' => $adjustedDateTime['time'],
            ]);
    
            return [
                'clients' => $clientData,
                'specialists' => $specialistData,
                'date' => $adjustedDateTime['date'],
                'hour' => $adjustedDateTime['time'],
            ];
    
        } catch (Exception $e) {
            $this->logger->error('Error in getting the data: ' . $e->getMessage());
            return new Response('Error in getting the data.', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
    
    /**
     * Finalizes a contract.
     *
     * @param ContractsDocument $contract The contract to be finalized.
     * @return bool|Response True if successful, or an HTTP response indicating an error.
     */
    public function finishContract(ContractsDocument $contract)
    {
        try {
            $hourOut = $this->getAdjustedDateTime()['time'];
    
            $totalPrice = $this->calculateTotal(
                $contract->getHourIn(),
                $hourOut,
                $contract->getSpecialist()->getPricePerHour(),
                $contract->getTax()
            );
    
            $contract->setHourOut($hourOut);
            $contract->setTotalPrice($totalPrice);
            $contract->setStatus(ContractsDocument::STATUS_COMPLETED);
            $contract->setPaid(true);
    
            $specialist = $contract->getSpecialist();
            $specialist->setIsAvailable(true);
            
            $this->documentManager->persist($contract);
            $this->documentManager->persist($specialist);
            $this->documentManager->flush();

            
            try {
                $invoice = $this->invoiceService->generateInvoice($contract);
            } catch (Exception $e) {
                $this->logger->error('Error in : ' . $e->getMessage());
                return new Response('Error trying to finish the contract.', Response::HTTP_INTERNAL_SERVER_ERROR);
            }
    
            return true;
        } catch (Exception $e) {
            $this->logger->error('Finish contract failed: ' . $e->getMessage());
            return new Response('Error trying to finish the contract.', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }  

    /**
     * Get the current date and time, and adjust them according to specific rules:
     * - If the current time is later than 21:00 or earlier than 08:00, set the time to 08:00 of the next day.
     * - Otherwise, add one hour to the current time.
     *
     * @return array The adjusted date and time.
     */
    private function getAdjustedDateTime(): array
    {
        $currentDateTime = new \DateTime();
        $currentDateTime->setTimezone(new \DateTimeZone('Europe/London')); // huso horario de Londres
        $currentHour = (int)$currentDateTime->format('H');
        $currentMinute = (int)$currentDateTime->format('i');
    
        if ($currentHour >= 21 || $currentHour < 8) {
            if ($currentHour >= 21) {
                $currentDateTime->modify('+1 day');
            }
            $currentHour = 8;
        } else {
            $currentHour++;
            if ($currentHour == 24) {
                $currentHour = 0;
                $currentDateTime->modify('+1 day');
            }
        }
    
        $hourString = sprintf('%02d:%02d', $currentHour, $currentMinute);
    
        return [
            'date' => $currentDateTime->format('Y-m-d'),
            'time' => $hourString,
        ];
    }

    /**
     * Calculate the total payment based on the start time, end time, and price per hour.
     * - If the end time is less than or equal to the start time + 1 hour, the total payment is the price per hour.
     * - For each additional hour, the total payment is increased by the price per hour.
     * - At the end, taxes are applied to the total payment.
     *
     * @param string $hourIn The start time of the contract in "HH:MM" format.
     * @param string $hourOut The end time of the contract in "HH:MM" format.
     * @param float $pricePerHour The price per hour.
     * @param float $taxes The tax rate to be applied to the total payment.
     * @return float The total payment after considering the hours worked and applying taxes.
     */
    public function calculateTotal(string $hourIn, string $hourOut, float $pricePerHour, float $taxes): float
    {
        $startTime = strtotime($hourIn);
        $endTime = strtotime($hourOut);

        $hoursWorked = ceil(($endTime - $startTime) / 3600);

        if ($hoursWorked <= 1) {
            $total = $pricePerHour;
        } else {
            $total = $hoursWorked * $pricePerHour;
        }

        $totalWithTaxes = $total * (1 + $taxes);

        return $totalWithTaxes;
    }


}
?>
