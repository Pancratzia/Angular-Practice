import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()
export class Dataservices{
    constructor(httpClient: HttpClient){}

    guardarPersonas(personas: Persona[]){
        
    }
}