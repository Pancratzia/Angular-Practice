import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PanCrALCULADORA';
  numberA: number = 0;
  numberB: number = 0;
  message: string = '';
  result: string = '0';

  mensaje(simbolo : string):void{
    this.message = `El resultado de ${this.numberA} ${simbolo} ${this.numberB} es `;
  }
  sumar(): void{
    this.mensaje('+');
    this.result = (this.numberA + this.numberB).toFixed (2);
  }

  restar(): void{
    this.mensaje('-');
    this.result = (this.numberA - this.numberB).toFixed(2);
  }

  multiplicar(): void{
    this.mensaje('*');
    this.result = (this.numberA * this.numberB).toFixed(2);
  }

  dividir(): void{
    this.mensaje('/');
    this.result = (this.numberA / this.numberB).toFixed(2);
  }

  modulo(): void{
    this.mensaje('%');
    this.result = (this.numberA % this.numberB).toFixed(2);
  }
}
