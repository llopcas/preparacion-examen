import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NotFoundComponent } from "./core/not-found/not-found.component";
 
const routes: Routes = [
  {    
    path: "",
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
  },
   {
    path: "config" , //ruta no indicada
    loadChildren: () => import ( "./config/config.module" ). then ( (m) => m.ConfigModule),
  },
  {
	
    path: 'personajes',
	
    loadChildren: () => import('./personajes/personajes.module').then(m => m.PersonajesModule)
	
  },
  {
	
    path: 'planeta',
	
    loadChildren: () => import('./planetas/planetas.module').then(m => m.PlanetasModule)
	
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