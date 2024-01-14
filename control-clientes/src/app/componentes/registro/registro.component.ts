import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertMessagesService } from 'jjwins-angular-alert-messages';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  email: string;
  password: string;

  constructor(private router : Router, private alertMessages : AlertMessagesService, private loginService : LoginService) { }

  ngOnInit(): void {
    this.loginService.getAuth().subscribe( auth => {
      if(auth){
        this.router.navigate(['/']);
      }
    })
  }

  registro(){
    this.loginService.registrarse(this.email, this.password)
    .then( (res) => {
      this.router.navigate(['/']);
    })
    .catch( (err) => {
      console.log(err);
      this.alertMessages.show("Error al registrar el usuario", {
        cssClass: 'alert-danger text-center d-flex justify-content-between m-1',
        timeOut: 3000
      })
    })
  }

}
