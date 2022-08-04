<!-- # AppCv

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
 -->

#   APP CURRICULUM VITAE  U  HOJA DE VIDA
Estos son pasos **necesarios** para desplegar esta aplicación localmente y en **Heroku**
>    HEROKU 🚀 
-   Instalar la dependencia **npm i express path --save**
-   Crear el archivo en la raíz del proyecto llamado **server.js**
-   El archivo **package.json** , haremos lo siguiente: 
    -   Agregar las siguientes dependencias de desarrollo a las de producción:
        -   typescript
        -   @angular/compiler
        -   @angular/compiler-cli
    -   Agregar el objeto **engines** con la version de:
        -   node
        -   npm
    -   En el apartado de los **scripts** agregar el siguiente script:
        -   heroku-postbuild: ng build --prod
        -   start: node server.js

>   RECURSOS :art:
![server.js](/src/assets/documentation/server.png "server.js")
