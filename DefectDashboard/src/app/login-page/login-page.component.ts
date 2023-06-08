import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  onSubmit() {
    console.log(this.loginForm.value);
    const userdata = localStorage.setItem(
      'user',
      JSON.stringify(this.loginForm.value)
    );
    this.router.navigate(['/home']);
  }
}
