PASOS PREVIOS EXAMEN ANGULAR

- HACEMOS UN REPO Y LO CLONAMOS (LEYENDO EL EXAMEN POR SI HAY ALGO RARO)

- ng new frontend --routing true -S 
   * elegimos CSS
- en el app.component.ts vinculamos las hojas de estilo (styleUrls) * modificamos el title
- en el app.component.html cortamos todo lo de la etiqueta <style> y lo pegamos en app.component.css

- npm start para sacar por localhost la pagina

- package.json para modificar los parametros del ng start  (puerto...etc)

- instalamos bootstrap
 * npm install popper.js --save
 * npm install jquery --save
 * npm install bootstrap --save 
 -- un solo comando npm i bootstrap jquery popper.js --save

 y se adjuntan al angular.json
  "styles": [
              "src/styles.css",
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "./node_modules/mini.css/dist/mini-default.min.css"
          ],
 "scripts": [
              "node_modules/jquery/dist/jquery.slim.min.js",
              "node_modules/popper.js/dist/umd/popper.min.js",
              "node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]
    * fontawesome (0.10.x	13.x	5.x && 6.x	soportado)
    $ npm install @fortawesome/fontawesome-svg-core
    $ npm install @fortawesome/free-solid-svg-icons
    # See Compatibility table below to choose a correct version
    $ npm install @fortawesome/angular-fontawesome@<version>

    * añadir al app.module.ts 
    import  {  FontAwesomeModule  }  desde  '@fortawesome/angular-fontawesome' ;
    @ NgModule ( { 
    importaciones : [ 
    BrowserModule , 
    FontAwesomeModule 
     ] , 
     declaraciones : [ AppComponent ] , 
     bootstrap : [ AppComponent ] 
    } ) 
    export  class  AppModule  {  }

    * añadir al app.component.ts 
    importar  {  Componente  }  desde  '@angular/core' ; 
    importar  {  faCoffee  }  desde  '@fortawesome/free-solid-svg-icons' ;

    @ Componente ( { 
     selector : 'app-root' , 
    templateUrl : './app.component.html' 
    } ) 
    export  class  AppComponent  { 
    faCoffee  =  faCoffee ; 
    }

- si borramos el node_modules desde donde esta el package.json le damos a npm install y se crea otra vez y si lo clonamos tb.

- environment.prod.ts y environment.ts se usa para variables globales ejemplo podremos poner una foto que llamada desde el header diferencie produccion de poruebas

- /assets meter fotos y logos. tiene persistencia en despliegue.

- ng g m core
- ng g m home --routing true
- ng g c core/shell
- ng g c core/shell/header
- ng g c core/shell/main
- ng g c core/shell/footer
- ng g c core/not-found

 - shell.component.html 
    <app-header></app-header>
     <app-main></app-main>
      <app-footer></app-footer>

- main.component.html
<main>
  <div>
    <router-outlet></router-outlet>
  </div>
</main>

- core.module.ts
    @NgModule({
    declarations: [ShellComponent, HeaderComponent, MainComponent, FooterComponent, NotFoundComponent],
    imports: [
    CommonModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
     ],
    exports: [ShellComponent]
    })
    export class CoreModule { }

- ejemplo index.html
    <html lang="es">
<head>
  <meta charset="utf-8">
  <title>Sicenad</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>

- shell.component.ts

    import { Component, OnInit } from '@angular/core';
 
    @Component({
    selector: 'app-shell',
    templateUrl: './shell.component.html',
    styles: []
    })
    export class ShellComponent implements OnInit {
 
    constructor() {}
 
    ngOnInit() {}
    }

- app.component.html
 
    <app-shell></app-shell>

- app.component.ts 

    import { Component } from '@angular/core';
 
    @Component({
    selector: 'app-root',
     templateUrl: './app.component.html',
     styles: []
    })
    export class AppComponent {
    }

- app-routing.module.ts

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NotFoundComponent } from "./core/not-found/not-found.component";
 
const routes: Routes = [
  {    
    path: "",
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
  }, 
  {
    path: "not-found",
    component: NotFoundComponent,
  },
  {
    path: "**",
    redirectTo: "not-found",
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

- home-routing.module.ts
     
     mport { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
 
const routes: Routes = [
  {// muestra la pagina inicial de la aplicacion
    path: '',
    component: HomeComponent
  }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}

- not-found.component.html

    <div class="container">
  <a class="nav-link home" routerLink="/" routerLinkActive="router-link-active">
    Go Home</a>
  <h1 class="text-center mt-4">Not Found</h1>
  <br>
  <h2 class="text-center">Error 404</h2>
  <br>
  <img class="img-fluid mb-4" src="assets/madoc.png" alt="Page not-found" />
  <br />
</div>

- Los componentes se exportan los modulos se importan
- creamos el componente home dentro del modulo home
 * ng g c home/home

 * app-routing.module.ts
    
    import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NotFoundComponent } from "./core/not-found/not-found.component";
const routes: Routes = [
{
path: "",
loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
},
{
path: "not-found",
component: NotFoundComponent,
},
{
path: "**",
redirectTo: "not-found",
},
];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
})
export class AppRoutingModule {}

 * home-routing.module.ts
    import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
{// muestra la pagina inicial de la aplicacion
path: '',
component: HomeComponent
}
];
@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class HomeRoutingModule {}

- "**" ruta comodin por si la url no coincide con las anteriores y envia al usuario al notfound

- poner las rutas en los routerLink y ponmer despues 
 <router-outlet></router-outlet>

- Ruta anidada ejemplo
    * ng m about --routing true
    * ng c about/about
    *  app-routing.module.ts

        import { NgModule } from "@angular/core";
    import { Routes, RouterModule } from "@angular/router";
    import { NotFoundComponent } from "./core/not-found/not-found.component";

const routes: Routes = [
{
path: "",
loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
},
{
path: 'about',
loadChildren: () => import('src/app/about/about.module').then(m => m.AboutModule)
},
{
path: "not-found",
component: NotFoundComponent,
},
{
path: "**",
redirectTo: "not-found",
},
];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
})
export class AppRoutingModule {}

- Varables en Rutas 
    * se ponen : para las variables dinamicas
     ej: countries/:country/cities/:city
        countries/usa/cities/new-york

{
path: 'authors/:id',
component: AuthorsComponent
}
 
export class AboutRoutingModule { } se pondria asi en el archivo

- en el constructor de AuthorComponet implements OnInit {
    public authorId = ' ';
    constructor(activateRoute: ActivatedRoute){
        this.authorId = activateRoute.snapshot.params['id];
    }
    ngOnInit(){}
}
* se llamaria asi en el autor.component.html
<h2>Author profile</h2>
￼<h3> {{ authorId }}





