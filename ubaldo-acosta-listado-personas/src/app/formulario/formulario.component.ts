import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output() personaCreada = new EventEmitter<Persona>();

  nombreInput: string= '';
  apellidoInput: string='';
  agregar(){
    let newPersona = new Persona(this.nombreInput.toUpperCase(), this.apellidoInput.toUpperCase());
    this.personaCreada.emit(newPersona);
    this.limpiarInputs();
  }

  limpiarInputs() : void{
    this.nombreInput = '';
    this.apellidoInput = '';
  }

}
