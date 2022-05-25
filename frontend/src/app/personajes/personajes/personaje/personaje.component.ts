import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../../models/personaje';
import { PersonajeImpl } from '../../models/personaje-impl';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {
  @Input() personaje: Personaje = new PersonajeImpl('', '', '', '', '', '', '', '', '', []);;
	@Output() personajeEliminar = new EventEmitter<Personaje>()
  constructor() { }

  ngOnInit(): void {
  }
  eliminar(): void {
    this.personajeEliminar.emit(this.personaje);
  }
}
