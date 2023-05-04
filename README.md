# Proyecto final de Desarrollo de Aplicaciones Web

## Tecnologías utilizadas

* PHP
  * Composer
  * Symfony
* JavaScript
  * JQuery
  * Gulp (automatizador)
* CSS
  * Sass
* HTML


## Librerías a usar

```bash
composer require lexik/jwt-authentication-bundle
```

```yaml
lexik_jwt_authentication:
    secret_key: '%env(resolve:JWT_SECRET_KEY)%'
    public_key: '%env(resolve:JWT_PUBLIC_KEY)%'
    pass_phrase: '%env(resolve:JWT_PASSPHRASE)%'
    token_ttl: '%env(JWT_TOKEN_TTL)%'
```

```php
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AuthController extends AbstractController
{
    private $jwtManager;

    public function __construct(JWTTokenManagerInterface $jwtManager)
    {
        $this->jwtManager = $jwtManager;
    }

    public function login(UserInterface $user): Response
    {
        $token = $this->jwtManager->create($user);

        return new Response(json_encode([
            'token' => $token,
            'roles' => $user->getRoles(),
        ]));
    }
}
```
