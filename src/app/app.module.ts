import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngualarFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyBpfxKFFpbh3g2E6OCSVdjw-fR-q9svPGk',
  authDomain: '',
  databaseURL: 'https://auth-899e9.firebaseio.com',
  storageBucket: '',
  messagingSenderId: '1055124975688'
};

@NgModule({
  declarations: [
    AppComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngualarFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
