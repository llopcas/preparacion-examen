import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NotFoundComponent } from "./core/not-found/not-found.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('src/app/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: "config" , //ruta no indicada
    loadChildren: () => import ( "src/app/config/config.module" ). then ( (m) => m.ConfigModule),
  },
  {

    path: 'personajes',

    loadChildren: () => import("src/app/personajes/personajes.module").then((m) => m.PersonajesModule)

  },
  {

    path: 'planeta/:id',

    loadChildren: () => import('src/app/planetas/planetas.module').then((m) => m.PlanetasModule)

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
export class AppRoutingModule { }
