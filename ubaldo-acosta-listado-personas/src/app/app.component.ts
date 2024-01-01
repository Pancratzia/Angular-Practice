import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado de Personas';
  personas: Persona [] = [
    new Persona("Laura", "Ortega"),
    new Persona ("Arthuro", "Dugarte"),
    new Persona("Tiffany", "Ortega"),
  ];
}
