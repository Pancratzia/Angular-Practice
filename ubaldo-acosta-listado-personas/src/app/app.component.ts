import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Listado de Personas';
  nombreInput: string= '';
  apellidoInput: string='';

  personas: Persona [] = [];

  agregar(){
    let newPersona = new Persona(this.nombreInput.toUpperCase(), this.apellidoInput.toUpperCase());
    this.personas.push(newPersona);
    this.limpiarInputs();
  }

  limpiarInputs() : void{
    this.nombreInput = '';
    this.apellidoInput = '';
  }

  borrar(i: number): void{ 
    this.personas.splice(i,1);
  }
}
