import { Component } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  //styleUrls: ['./personas.component.css'],
  /*template: `<h2>Listado de Personas</h2>
    <ol>
      <app-persona></app-persona>
      <app-persona></app-persona>
    </ol> `,
  styles: [`
  ol{
    background-color: red;
  }
  `]*/
})
export class PersonasComponent {
  deshabilitar: boolean = false;
  mensaje: string = 'No se ha agregado ninguna persona';
  agregarPersona(){
    this.mensaje = 'Persona Agregada'
  }
}
