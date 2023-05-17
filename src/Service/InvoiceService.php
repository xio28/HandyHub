<?php

namespace App\Service;

use Knp\Snappy\Pdf;
use Twig\Environment;

class InvoiceService
{
    private $snappy;
    private $twig;

    public function __construct(Pdf $snappy, Environment $twig)
    {
        $this->snappy = $snappy;
        $this->twig = $twig;
    }

    public function generateInvoice($contract)
    {
        $html = $this->twig->render('invoice.html.twig', [
            'contract' => $contract,
            // Aquí puedes añadir los demás datos necesarios
            // para crear la factura
        ]);

        return $this->snappy->getOutputFromHtml($html);
    }
}

?>
