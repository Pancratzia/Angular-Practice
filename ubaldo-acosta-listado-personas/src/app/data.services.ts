import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';
import { environment } from 'src/environments/environment.development';

@Injectable()
export class Dataservices{
    constructor(private httpClient: HttpClient){}

    guardarPersonas(personas: Persona[]){
        this.httpClient.put(environment.databaseLink + "datos.json", personas)
        .subscribe(
            response => console.log(response),
            error => console.log(error)
        );
    }

    cargarPersonas(){
        return this.httpClient.get(environment.databaseLink + "datos.json")
    }

    modificarPersona(index:number, persona: Persona){
        let url: string;
        url = environment.databaseLink + "/datos/" + index + ".json";
        this.httpClient.put(url, persona)
        .subscribe(
            response => console.log(response),
            error => console.log(error)
        )
    }
}