import { Ingreso } from "./ingreso.model";


export class IngresoServicio{
    ingreso:Ingreso[] = [
        new Ingreso("Sueldo", 4000),
        new Ingreso("Rifa", 1000),
    ];
}