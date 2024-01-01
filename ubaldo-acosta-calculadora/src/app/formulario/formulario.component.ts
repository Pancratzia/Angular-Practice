import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  numberA: number = 0;
  numberB: number = 0;

  @Output() resultMessage = new EventEmitter<string>();
  @Output() resultNumber = new EventEmitter<string>();


  sumar(): void {
    const resultado = `${this.numberA} + ${this.numberB} = `;
    const numero = (Number(this.numberA) + Number(this.numberB)).toFixed(2);
    this.resultMessage.emit(resultado);
    this.resultNumber.emit(numero);
  }

  restar(): void{
    const resultado = `${this.numberA} - ${this.numberB} = `;
    const numero = (Number(this.numberA) - Number(this.numberB)).toFixed(2);
    this.resultMessage.emit(resultado);
    this.resultNumber.emit(numero);
  }

  multiplicar(): void{
    const resultado = `${this.numberA} * ${this.numberB} = `;
    const numero = (Number(this.numberA) * Number(this.numberB)).toFixed(2);
    this.resultMessage.emit(resultado);
    this.resultNumber.emit(numero);
  }

  dividir(): void{
    const resultado = `${this.numberA} / ${this.numberB} = `;
    const numero = (Number(this.numberA) / Number(this.numberB)).toFixed(2);
    this.resultMessage.emit(resultado);
    this.resultNumber.emit(numero);
  }

  modulo(): void{
    const resultado = `${this.numberA} % ${this.numberB} = `;
    const numero = (Number(this.numberA) % Number(this.numberB)).toFixed(2);
    this.resultMessage.emit(resultado);
    this.resultNumber.emit(numero);
  }

}
