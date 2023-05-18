<?php

namespace App\Service;

use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;

/**
 * Class EmailService
 *
 * Service class for sending emails.
 */
class EmailService
{
    /**
     * @var MailerInterface
     */
    private $mailer;

    /**
     * EmailService constructor.
     *
     * @param MailerInterface $mailer The MailerInterface instance.
     */
    public function __construct(MailerInterface $mailer)
    {
        $this->mailer = $mailer;
    }

    /**
     * Send an account verification confirmation email.
     *
     * @param string $to The recipient email address.
     */
    public function sendAccountVerificationConfirmationEmail(string $to)
    {
        $email = (new Email())
            ->from('admin@handyhubteam.com')
            ->to($to)
            ->subject('Verificación correcta')
            ->html('<p>Has verificado tu cuenta correctamente.</p>');

        $this->mailer->send($email);
    }

    /**
     * Send a verification email.
     *
     * @param string $to The recipient email address.
     * @param string $verificationLink The verification link.
     */
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
