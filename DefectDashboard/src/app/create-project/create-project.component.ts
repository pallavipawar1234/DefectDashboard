import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
})
export class CreateProjectComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  CreateProject = new FormGroup({
    project: new FormControl('', [Validators.required]),
    project_type: new FormControl(''),
    team_size: new FormControl(''),
    owner_name: new FormControl(''),
    project_summary: new FormControl(''),
    project_details: new FormControl(''),
  });

  onSubmit() {
    console.log(this.CreateProject.value);
    this.router.navigate(['/project-status-page']);
  }
}
