import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertMessagesService } from 'jjwins-angular-alert-messages';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor( private router: Router, private alertMessages: AlertMessagesService, private  loginService : LoginService  ) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  login(){
    this.loginService.login(this.email, this.password)
    .then((res) => {
      this.router.navigate(['/']);
    })
    .catch((error) => {
      console.log(error);
      this.alertMessages.show("Email o contraseña incorrectos", {
        cssClass: 'alert-danger text-center d-flex justify-content-between m-1',
        timeOut: 3000
      })
    })
  }

}
