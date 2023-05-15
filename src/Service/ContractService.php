<?php
namespace App\Service;

use App\Document\ContractsDocument;
use App\Repository\ContractRepository;
use App\Repository\UserRepository;
use Doctrine\ODM\MongoDB\DocumentManager;
use Psr\Log\LoggerInterface;
use Symfony\Component\HttpFoundation\Request;


class ContractService {
    private $documentManager;
    private $contractRepository;
    private $userRepository;
    private $logger;

    public function __construct(
        DocumentManager $documentManager, 
        ContractRepository $contractRepository, 
        UserRepository $userRepository,
        LoggerInterface $logger,
    ) {
        $this->documentManager = $documentManager;
        $this->contractRepository = $contractRepository;
        $this->userRepository = $userRepository;
        $this->logger = $logger;
    }

    public function registerContract(Request $request)
    {
        try {
            $contract = new ContractsDocument();
    
            $contract->setCategory($request->get('category'));
    
            $this->documentManager->persist($contract);
            $this->documentManager->flush();
    
            $this->logger->info('Category '. $contract->getId(). ' registered successfully');
    
            return $contract;
            
        } catch(Exception $e) {
            $this->logger->error('Category register failed: ' . $e->getMessage());
            return new Response('Ha habido un error al registrar la categoría. Por favor, inténtalo de nuevo.', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Get the current date and time, and adjust them according to specific rules:
     * - If the current time is later than 21:00 or earlier than 08:00, set the time to 08:00 of the next day.
     * - Otherwise, add one hour to the current time.
     *
     * @return \DateTime The adjusted date and time.
     */
    public function getAdjustedDateTime(): \DateTime
    {
        /** 
         * @var \DateTime $currentDateTime The current date and time. 
         */
        $currentDateTime = new \DateTime();
        
        /** 
         * @var int $currentHour The current hour. 
         */
        $currentHour = (int)$currentDateTime->format('H');

        if ($currentHour >= 21 || $currentHour < 8) {
            $currentDateTime->setTime(8, 0);
            $currentDateTime->modify('+1 day');
        } else {
            $currentDateTime->add(new \DateInterval('PT1H'));
        }

        return $currentDateTime;
    }

    /**
     * Calculate the total payment based on the start time, end time and price per hour.
     * - If the end time is less or equal to start time + 1 hour, the total payment is the price per hour.
     * - For each additional hour, the total payment is increased by the price per hour.
     * - At the end, taxes are applied to the total payment.
     *
     * @param \DateTime $hourIn The start time of the contract.
     * @param \DateTime $hourOut The end time of the contract.
     * @param float $pricePerHour The price per hour.
     * @param float $taxes The tax rate to be applied to the total payment.
     * @return float The total payment after considering the hours worked and applying taxes.
     */
    public function calculateTotal(\DateTime $hourIn, \DateTime $hourOut, float $pricePerHour, float $taxes): float
    {
        $hoursWorked = $hourOut->diff($hourIn)->h;

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
