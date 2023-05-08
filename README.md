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


## Installation

### MongoDB

Here is the package we need to make Symfony integrate with MongoDB Atlas.

- DoctrineMongoDBBundle. ([Tutorial](https://www.doctrine-project.org/projects/doctrine-mongodb-bundle/en/4.4/installation.html#install-the-bundle-with-symfony-flex)).


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
