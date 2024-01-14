import { AngularFireAuth } from "@angular/fire/compat/auth";
import { CanActivate, Router } from "@angular/router";
import { ConfiguracionServicio } from "../servicios/configuracion.service";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";


@Injectable()
export class ConfiguracionGuard implements CanActivate {

    constructor(private router: Router, private afAuth: AngularFireAuth, private configuracionServicio : ConfiguracionServicio) { }
    canActivate() : Observable<boolean> {
        return this.configuracionServicio.getConfiguracion().pipe(
            map(config => {
                if(config.permitirRegistro){
                    return true;
                }else{
                    this.router.navigate(['/login']);
                    return false;
                }
            })
        )
        
    }
}