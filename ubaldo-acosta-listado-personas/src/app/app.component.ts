import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Listado de Personas';
  personas: Persona [] = [];

  borrar(i: number): void{ 
    this.personas.splice(i,1);
  }

  personaAgregada(persona: Persona): void{
    this.personas.push(persona);
  }
}
