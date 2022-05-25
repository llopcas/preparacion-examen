import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../models/personaje';

@Component({
  selector: 'app-personaje-item',
  templateUrl: './personaje-item.component.html',
  styleUrls: ['./personaje-item.component.css']
})
export class PersonajeItemComponent implements OnInit {
  @Input()  personaje!: Personaje;
	@Output() personajeSeleccionado = new EventEmitter<Personaje>();
  genderMap: any = {
	
    'male': 'Macho', 'female': 'Hembra', 'n/a': 'Sin Género'
	
  };
  constructor() { }

  ngOnInit(): void {
  }

}
