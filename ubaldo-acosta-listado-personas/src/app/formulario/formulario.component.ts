import { Component, ElementRef, ViewChild } from '@angular/core';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  //@Output() personaCreada = new EventEmitter<Persona>();

  //nombreInput: string= '';
  //apellidoInput: string='';

  @ViewChild('nombreRef') nombreInput : ElementRef;
  @ViewChild('apellidoRef') apellidoInput : ElementRef;

  constructor(private personaService: PersonasService){
    this.personaService.saludar.subscribe(
      (nombreCompleto:string) => alert(`¡Hola, ${nombreCompleto}!`)
    )
  }

  agregar() : void {
    let newPersona = new Persona(this.nombreInput.nativeElement.value.toUpperCase(), this.apellidoInput.nativeElement.value.toUpperCase());
    //this.loggingService.enviarMensajeAConsola(`Persona creada: ${newPersona.nombre + ' ' + newPersona.apellido}`);
    //this.personaCreada.emit(newPersona);

    this.personaService.agregarPersona(newPersona);
    this.limpiarInputs();
  }

  limpiarInputs() : void{
    this.nombreInput.nativeElement.value = '';
    this.apellidoInput.nativeElement.value = '';
  }

}
