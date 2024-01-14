import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { Configuracion } from "../modelos/configuracion.model";
import { Observable, filter } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class ConfiguracionServicio{

    configuracionDoc : AngularFirestoreDocument<Configuracion>;
    configuracion : Observable<Configuracion>;

    id = '1';

    constructor(private db : AngularFirestore){}

    getConfiguracion(): Observable<Configuracion> {
        this.configuracionDoc = this.db.doc<Configuracion>(`configuracion/${this.id}`);
        this.configuracion = this.configuracionDoc.valueChanges().pipe(
            filter(configuracion => !!configuracion)
        ) as Observable<Configuracion>; 
        return this.configuracion;
    }

    modificarConfiguracion(configuracion : Configuracion){
        this.configuracionDoc = this.db.doc<Configuracion>(`configuracion/${this.id}`);
        this.configuracionDoc.update(configuracion);
    }
}