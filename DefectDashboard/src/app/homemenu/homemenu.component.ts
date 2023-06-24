import { Component, OnInit } from '@angular/core';
import { BackendConnectService } from '../Service/backend-connect.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'homemenu',
  templateUrl: './homemenu.component.html',
  styleUrls: ['./homemenu.component.css'],
})
export class HomemenuComponent implements OnInit {
  constructor(private service: BackendConnectService) {}

  ngOnInit(): void {
    console.log('LoggedIn - Home Page ' + this.username);
  }

  username = this.service.SignIn;
}
