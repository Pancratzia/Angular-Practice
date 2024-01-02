import { Persona } from "./persona.model";

export class PersonasService{
    personas: Persona [] = [];

    agregarPersona(persona: Persona){
        this.personas.push(persona);
    }
}