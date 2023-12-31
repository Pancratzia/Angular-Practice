import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';

@Injectable()
export class PersonasService {
  personas: Persona[] = [];

  saludar = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) {}

  agregarPersona(persona: Persona) {
    this.loggingService.enviarMensajeAConsola(
      `La persona ${persona.nombre} ${persona.apellido} ha sido agregada al arreglo de personas`
    );
    this.personas.push(persona);
  }

  encontrarPersona(index: number): Persona {
    let persona: Persona = this.personas[index];
    return persona;
  }

  modificarPersona(index: number, persona: Persona) {
    let newPersona = this.personas[index];
    newPersona.nombre = persona.nombre;
    newPersona.apellido = persona.apellido;
  }

  eliminarPersona(index: number) {
    this.personas.splice(index, 1);
  }
}
