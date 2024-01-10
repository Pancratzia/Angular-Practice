import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable()
export class LoginService {
  token: string | null;

  constructor(private router: Router, private auth: AngularFireAuth) {}

  login(email: string, password: string) {
    
    this.auth.signInWithEmailAndPassword(email,password)
    .then((result) =>{
        this.auth.idToken.subscribe((token) =>{
            this.token = token;
            this.router.navigate(['/']);
        })
    })

    
  }

  getIdToken(){
    return this.token;
  }
}
