import { Component } from '@angular/core';
import { IngresoServicio } from '../ingreso/ingreso.service';
import { EgresoServicio } from '../egreso/egreso.service';
import { Egreso } from '../egreso/egreso.model';
import { Ingreso } from '../ingreso/ingreso.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  tipo:string = "ingresoOperacion";
  descripcionInput: string;
  valorInput:number;

  constructor(private ingresoServicio: IngresoServicio, private egresoServicio: EgresoServicio){}

  tipoOperacion(event: any){
      this.tipo = event.target.value;
  }

  agregarValor(){
  
    if(this.tipo === "ingresoOperacion"){
      this.ingresoServicio.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput));
    }else{
      this.egresoServicio.egresos.push(new Egreso(this.descripcionInput, this.valorInput));
    }

    this.descripcionInput = '';
    this.valorInput = 0;

  }

}
