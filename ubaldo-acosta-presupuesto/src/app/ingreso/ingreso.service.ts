import { Ingreso } from "./ingreso.model";


export class IngresoServicio{
    ingresos:Ingreso[] = [
        new Ingreso("Sueldo", 4000),
        new Ingreso("Rifa", 1000),
    ];

    eliminar(ingreso:Ingreso){
        const indice: number = this.ingresos.indexOf(ingreso);
        this.ingresos.splice(indice,1);
    }
}