import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';
import { Dataservices } from './data.services';

@Injectable()
export class PersonasService {
  personas: Persona[] = [];

  saludar = new EventEmitter<string>();

  constructor(private loggingService: LoggingService,
    private dataServices: Dataservices) {}

  setPersonas(personas: Persona[]){
    this.personas = personas;
  } 

  obtenerPersonas(){
    return this.dataServices.cargarPersonas();
  }

  agregarPersona(persona: Persona) {
    this.loggingService.enviarMensajeAConsola(
      `La persona ${persona.nombre} ${persona.apellido} ha sido agregada al arreglo de personas`
    );
    if(this.personas ===null){
      this.personas = [];
    }
    this.personas.push(persona);
    this.dataServices.guardarPersonas(this.personas);
  }

  encontrarPersona(index: number): Persona {
    let persona: Persona = this.personas[index];
    return persona;
  }

  modificarPersona(index: number, persona: Persona) {
    let newPersona = this.personas[index];
    newPersona.nombre = persona.nombre;
    newPersona.apellido = persona.apellido;
    this.dataServices.modificarPersona(index, persona);
  }

  eliminarPersona(index: number) {
    this.personas.splice(index, 1);
  }
}
