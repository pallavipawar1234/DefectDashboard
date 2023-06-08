import { Component, OnInit } from '@angular/core';
import { BackendConnectService } from '../Service/backend-connect.service';

@Component({
  selector: 'app-review-issue',
  templateUrl: './review-issue.component.html',
  styleUrls: ['./review-issue.component.css'],
})
export class ReviewIssueComponent implements OnInit {
  Data: any = [];
  constructor(private userdata: BackendConnectService) {
    // let data = this.userdata.getUserData();
    this.userdata.getUserData().subscribe((data) => {
      this.Data = data;
      console.log(data);
    });
  }

  ngOnInit(): void {}
}
