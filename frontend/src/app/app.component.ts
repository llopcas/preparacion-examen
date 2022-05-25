import { Component } from '@angular/core';
import { faEnvelope, faPhone, faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prueba Examen';


  faCorreo = faEnvelope;

  faLlamada = faPhone;

  faCoffee = faCoffee;

}
