import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'create-issue',
  templateUrl: './create-issue.component.html',
  styleUrls: ['./create-issue.component.css'],
})
export class CreateIssueComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  CreateIssue = new FormGroup({
    project: new FormControl('', [Validators.required]),
    issue_type: new FormControl(''),
    severity: new FormControl(''),
    reporter: new FormControl(''),
    assignee: new FormControl(''),
    issue_Summary: new FormControl(''),
    issue_details: new FormControl(''),
    log: new FormControl(''),
  });

  onSubmit() {
    console.log(this.CreateIssue.value);
    this.CreateIssue.reset();
    // this.router.navigate(['/project-status-page']);
  }
}
