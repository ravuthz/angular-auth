import { Component, OnInit, HostBinding } from '@angular/core';

import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn } from '../router.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [moveIn()],
  host: {'[@moveIn]':''}
})

export class LoginComponent implements OnInit {

  error: any;
  
  constructor(public af: AngularFire, private router: Router) {
    this.af.auth.subscribe(auth => {
      if (auth) {
        this.router.navigateByUrl('/members');
      }
    });
  }

  login() {
    this.router.navigateByUrl('/login-email');
  }

  loginFB() {
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup
    }).then(res => {
      this.router.navigate(['/members']);
    }).catch(err => {
      this.error = err;
    });
  }
  
  loginGG() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    }).then(res => {
      this.router.navigate(['/members']);
    }).catch(err => {
      this.error = err;
    });
  }
  
  ngOnInit() {}

}
