import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
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

  @ViewChild('nombreRef') nombreInput : ElementRef;
  @ViewChild('apellidoRef') apellidoInput : ElementRef;

  agregar() : void {
    let newPersona = new Persona(this.nombreInput.nativeElement.value.toUpperCase(), this.apellidoInput.nativeElement.value.toUpperCase());
    this.personaCreada.emit(newPersona);
    this.limpiarInputs();
  }

  limpiarInputs() : void{
    this.nombreInput.nativeElement.value = '';
    this.apellidoInput.nativeElement.value = '';
  }

}
