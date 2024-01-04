import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoServicio } from './egreso.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {

  egresos:Egreso[] = [];
  @Input() ingresoTotal:number;

  constructor(private egresoServicio:EgresoServicio){}
  ngOnInit(): void {
    this.egresos = this.egresoServicio.egresos;
  }

  eliminarRegistro(egreso: Egreso){
    this.egresoServicio.eliminar(egreso);
  }

  calcularPorcentaje(egreso: Egreso){
    return egreso.valor / this.ingresoTotal * 100;
  }

}
