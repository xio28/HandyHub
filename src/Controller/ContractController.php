<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Service\InvoiceGenerator;

class ContractController extends AbstractController
{
    /**
     * @Route("/contract/{id}/finalize", name="contract_finalize")
     */
    public function finalize($id, InvoiceGenerator $invoiceGenerator): Response
    {
        // Aquí buscarías el contrato por su id, por ejemplo:
        $contract = $this->getDoctrine()->getRepository(Contract::class)->find($id);

        // Asegúrate de que el contrato existe y de que puede ser finalizado

        // Generar la factura en PDF
        $pdf = $invoiceGenerator->generateInvoice($contract);

        // Aquí deberías marcar el contrato como finalizado y guardar los cambios en la base de datos

        // Devolver la factura en PDF como respuesta
        return new Response(
            $pdf,
            200,
            [
                'Content-Type' => 'application/pdf',
                'Content-Disposition' => 'inline; filename="invoice.pdf"'
            ]
        );
    }
}
?>
