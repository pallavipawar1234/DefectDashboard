import { Component, OnInit } from '@angular/core';
import { BackendConnectService } from '../Service/backend-connect.service';

@Component({
  selector: 'review-project',
  templateUrl: './review-project.component.html',
  styleUrls: ['./review-project.component.css'],
})
export class ReviewProjectComponent implements OnInit {
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
