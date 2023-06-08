import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css'],
})
export class RegistrationPageComponent implements OnInit {
  ngOnInit(): void {}

  registrationForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl(''),
  });

  constructor(private router: Router) {}

  onSubmit() {
    console.log(this.registrationForm.value);
    const userdata = localStorage.setItem(
      'user',
      JSON.stringify(this.registrationForm.value)
    );
  }
}
