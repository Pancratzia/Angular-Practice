import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output() personaCreada = new EventEmitter<Persona>();

  //nombreInput: string= '';
  //apellidoInput: string='';
  agregar(nombreInput: HTMLInputElement, apellidoInput: HTMLInputElement){
    let newPersona = new Persona(nombreInput.value.toUpperCase(), apellidoInput.value.toUpperCase());
    this.personaCreada.emit(newPersona);
    this.limpiarInputs(nombreInput, apellidoInput);
  }

  limpiarInputs(nombreInput: HTMLInputElement, apellidoInput: HTMLInputElement) : void{
    nombreInput.value = '';
    apellidoInput.value = '';
  }

}
