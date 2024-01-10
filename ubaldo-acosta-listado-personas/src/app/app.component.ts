import { Component, OnInit } from '@angular/core';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: string = 'Listado de Personas';


  constructor(private loginService: LoginService){}

  ngOnInit(): void {}

  isAuth(){
    return this.loginService.isAuth();
  }

  salir(){

  }

}
