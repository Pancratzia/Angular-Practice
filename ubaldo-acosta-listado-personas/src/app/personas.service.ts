import { Injectable } from "@angular/core";
import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";

@Injectable()
export class PersonasService{
    personas: Persona [] = [];

    constructor(private loggingService: LoggingService){}

    agregarPersona(persona: Persona){
        this.loggingService.enviarMensajeAConsola(`La persona ${persona.nombre} ${persona.apellido} ha sido agregada al arreglo de personas`);
        this.personas.push(persona);
    }
}