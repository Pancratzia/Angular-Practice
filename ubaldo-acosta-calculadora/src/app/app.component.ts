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
  result: number = 0;

  sumar(): void{
    this.result = this.numberA + this.numberB;
  }
}
