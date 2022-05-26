import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajesRoutingModule } from './personajes-routing.module';
import { PersonajesComponent } from './personajes/personajes.component';
import { PersonajeItemComponent } from './personaje-item/personaje-item.component';
import { FormsModule } from '@angular/forms';
import { AuxiliarService } from '../service/auxiliar.service';
import { PersonajeComponent } from './personajes/personaje/personaje.component';
import { PersonajeFormComponent } from './personaje-form/personaje-form.component';


@NgModule({
  declarations: [
    PersonajesComponent,
    PersonajeItemComponent,
    PersonajeComponent,
    PersonajeFormComponent
  ],
  imports: [
    CommonModule,
    PersonajesRoutingModule,
    FormsModule
  ],
	exports: [ PersonajeComponent],

  providers: [AuxiliarService]
})
export class PersonajesModule { }
