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

    public function sendAccountVerificationConfirmationEmail(string $to)
    {
        $email = (new Email())
            ->from('admin@handyhubteam.com')
            ->to($to)
            ->subject('Verificación correcta')
            ->html('<p>Has verificado tu cuenta correctamente.</p>');

        $this->mailer->send($email);
    }

    public function sendVerificationEmail(string $to, string $verificationLink)
    {
        $email = (new Email())
            ->from('admin@handyhubteam.com')
            ->to($to)
            ->subject('Verificación de correo electrónico')
            ->html('<p>Por favor, verifica tu correo electrónico haciendo clic en el siguiente enlace: <a href="' . $verificationLink . '">verificar</a></p>');

        $this->mailer->send($email);
    }
}

?>
