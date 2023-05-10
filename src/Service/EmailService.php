<?php

namespace App\Service;

use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;

class EmailService
{
    private $mailer;

    public function __construct(MailerInterface $mailer)
    {
        $this->mailer = $mailer;
    }

    public function sendVerificationEmail(string $to, string $verificationLink)
    {
        $email = (new Email())
            ->from('admin@handyhubteam.com')
            ->to($to)
            ->subject('Verificación de correo electrónico')
            ->text('Por favor, verifica tu correo electrónico haciendo clic en el siguiente enlace: ' . $verificationLink);

        $this->mailer->send($email);
    }
}

?>
