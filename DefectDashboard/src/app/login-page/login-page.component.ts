import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, CanActivate } from '@angular/router';
import { BackendConnectService } from '../Service/backend-connect.service';
import { BehaviorSubject } from 'rxjs';
import { AuthGuard } from '../Auth/auth.guard';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  ngOnInit(): void {}

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl(''),
  });

  constructor(private route: Router, private user: BackendConnectService) {}

  onSubmit() {
    console.log(this.loginForm.value);
    let name = this.loginForm.value.username;
    let pass = this.loginForm.value.password;
    console.log(name, pass);
    console.log(this.user.login(name, pass));

    if (this.user.login(name, pass)) {
      alert('Logged In Successfully !!');
      this.route.navigate(['home']);
    } else {
      alert('Invalid Username & Password !!');
      this.route.navigate(['login']);
    }
  }
}
