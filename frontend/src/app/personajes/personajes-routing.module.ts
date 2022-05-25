import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajeFormComponent } from './personaje-form/personaje-form.component';
import { PersonajesComponent } from './personajes/personajes.component';

const routes: Routes = [
  {
	
    path: '',
	
    component: PersonajesComponent
	
  },
  {
	
    path: 'formulario',
	
    component: PersonajeFormComponent
	
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonajesRoutingModule { }
