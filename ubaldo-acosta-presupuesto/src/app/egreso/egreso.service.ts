import { Egreso } from "./egreso.model";


export class EgresoServicio{
    egresos:Egreso[] = [
        new Egreso("Alquiler", 1500),
        new Egreso("Comida", 700),
    ];

    eliminar(egreso:Egreso){
        const indice: number = this.egresos.indexOf(egreso);
        this.egresos.splice(indice,1);
    }
}