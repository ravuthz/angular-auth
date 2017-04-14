import { Component, OnInit } from '@angular/core';

import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]':''}
})

export class SignupComponent implements OnInit {
  
  error: any;
  state: string = '';

  constructor(public af: AngularFire, private router: Router) {
    
  }

  onSubmit(formData) {
    if (formData.valid) {
      console.log(formData.value);
      this.af.auth.createUser({
        email: formData.value.email,
        password: formData.value.password
      }).then(res => {
        console.log(res);
        this.router.navigate(['/login']);
      }).catch(err => {
        console.log(err);
        this.error = err;
      });
    }
  }

  ngOnInit() {}

}
