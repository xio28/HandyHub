# Final project of Web Application Development

## Repositorio

- [HandyHub](https://github.com/xio28/HandyHub)

## Instalación

### MongoDB

Necesitamos instalar esto para poder integrar mongodb en xampp (windows).

- DoctrineMongoDBBundle. ([Tutorial](https://www.doctrine-project.org/projects/doctrine-mongodb-bundle/en/4.4/installation.html#install-the-bundle-with-symfony-flex)).


### Instalar proyecto

```bash
composer install
yarn install # hemos usado yarn
``` 

## Usage

*El proyecto no está dockerizado, por lo que no sería raro que se produjesen conflictos con las dependencias de composer o npm.*

Ten en cuenta que debes cambiar la variable `APP_ENV` en `.env` de `prod` a `dev` si quieres modificar.

### Build
Para generar la carpeta `public/build/`, debes hacer lo siguiente (necesaria para que se vean los estilos de la web):

```bash
yarn run dev
```

Si, por alguna razón, cambias a `prod` y te da un error 500, debes hacer:

```bash
php bin/console cache:clear
```

## Mailtrap
Para que lleguen los correos de verificación debes poner el DSN de tu cuenta de mailtrap en la variable `MAILER_DSN` (te creas un proyecto, entras a la inbox y eliges la conexión para "php"):
![](https://hackmd.io/_uploads/H1rxfTfH3.png)
![](https://hackmd.io/_uploads/rkaIzpzBh.png)
![](https://hackmd.io/_uploads/HyfqzaMr2.png)


## Login superadmin
Hay un superadmin creado en la base de datos; las credenciales son:

user: superadmin@handyhub.com
pass: 1234
