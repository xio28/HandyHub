<?php

namespace App\Service;

class VerificationService {

    public function verifyUser($id) {
        $this->updateIsVerified($id, true);
    }

    public function updateIsVerified(string $id, bool $isVerified) {
        $user = $this->findUserById($id);

        if ($user) {
            $user->setIsVerified($isVerified);
            $this->documentManager->flush();
        }
    }
}

?>
