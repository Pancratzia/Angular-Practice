import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';
import { environment } from 'src/environments/environment.development';
import { LoginService } from './login/login.service';

@Injectable()
export class Dataservices{
    constructor(private httpClient: HttpClient, private loginService: LoginService){}

    guardarPersonas(personas: Persona[]){
        const token = this.loginService.getIdToken();
        this.httpClient.put(environment.databaseLink + "datos.json?auth="+token, personas)
        .subscribe(
            response => console.log(response),
            error => console.log(error)
        );
    }

    cargarPersonas(){
        const token = this.loginService.getIdToken();
        return this.httpClient.get(environment.databaseLink + "datos.json?auth="+token)
    }

    modificarPersona(index:number, persona: Persona){
        const token = this.loginService.getIdToken();
        let url: string;
        url = environment.databaseLink + "/datos/" + index + ".json?auth="+token;
        this.httpClient.put(url, persona)
        .subscribe(
            response => console.log(response),
            error => console.log(error)
        )
    }

    eliminarPersona(index:number){
        const token = this.loginService.getIdToken();
        let url: string;
        url = environment.databaseLink + "/datos/" + index + ".json?auth="+token;
        this.httpClient.delete(url)
        .subscribe(
            response => console.log(response),
            error => console.log(error)
        ) 
    }
}