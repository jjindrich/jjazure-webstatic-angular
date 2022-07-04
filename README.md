# Azure Static Web App with Angular

This repo shows how to use [Azure Static Web App](https://docs.microsoft.com/en-us/azure/static-web-apps) with Angular and Azure Functions NodeJs.

Docs
- https://medium.com/bb-tutorials-and-thoughts/building-an-angular-app-with-azure-static-web-apps-service-8fe84ebe4709
- https://github.com/bbachi/angular-azure-static-web-app

## Create Angular application

You can create new custom one

```
ng new jjtodoapp
```
> You can generate application base on https://github.com/staticwebdev/angular-basic/generate and create new GitHub repository (using older packages).

Run app locally

```
cd jjtodoapp
ng serve
```

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

It adds references and code to serve /browser content (/dist/jjtodoapp/browser). You can test it

```
npm run dev:ssr
```

Now we have to change GitHub workflow
- Output location - dist/jjtodoapp/browser
- add app_build_command: "npm run prerender"

## Add Azure Function

Docs
- https://docs.microsoft.com/en-us/azure/static-web-apps/add-api?tabs=vanilla-javascript

Use Azure Static Web Apps extension in VS Code to create new Function
- name: getMessage
- languge: Javascript

Install CLI

```
npm install -g @azure/static-web-apps-cli
```



