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

  isAuth(){

    if(this.token !== null && this.token !== undefined) return true;
    return false;
  }

  logout(){
    this.auth.signOut().then(()=>{
      this.token = null;
      this.router.navigate(['login']);
    }).catch(error=>console.log(error));
  }
}
