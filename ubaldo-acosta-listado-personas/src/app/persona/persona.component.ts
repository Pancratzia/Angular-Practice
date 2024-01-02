import { Component, Input } from '@angular/core';
import { Persona } from '../persona.model';
import { LoggingService } from '../LoggingService.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  constructor(private loggingService: LoggingService){

  }

  @Input() persona: Persona;
  @Input() indice: number;

  onPersonaClickeada() : void{
    this.loggingService.enviarMensajeAConsola('Has hecho click a la persona ' + (this.indice+1));
  }



}
