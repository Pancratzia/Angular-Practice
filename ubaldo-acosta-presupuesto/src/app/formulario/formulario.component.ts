import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  tipo:string = "IngresoOperacion";

  tipoOperacion(evento: Event){

  }

}
