# Azure Static Web App with Angular

## Create Angular application

You can create new custom one

```
ng new jjtodoapp
```

Run app locally

```
cd jjtodoapp
ng serve
```

Or you can generate application base on https://github.com/staticwebdev/angular-basic/generate and create new GitHub repository (using older packages).

## Create Azure Static Web App

Docs
- https://docs.microsoft.com/en-us/azure/static-web-apps/get-started-portal?tabs=angular&pivots=github

Create new Azure resource Azure Static Web App
- link to existing GitHub repository
- Build details
    - Presets - Angular
    - App location - jjtodoapp
    - Output location - dist/jjtodoapp

It create Github workflow automatically in [.github\workflows](\.github\workflows) and deploy app. 
> For deployment you have to commit something

## Use Angular Server Side Rendering

Docs
- https://angular.io/guide/universal
- https://dotnetthoughts.net/angular-server-side-rendering-azure-static-webapps/

```
ng add @nguniversal/express-engine
```
> I have to change packages versions to 14.0.4 first.

## Develop application and function

Docs
- https://medium.com/bb-tutorials-and-thoughts/building-an-angular-app-with-azure-static-web-apps-service-8fe84ebe4709

