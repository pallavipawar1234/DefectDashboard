import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'homeprojectmenu',
  templateUrl: './homeprojectmenu.component.html',
  styleUrls: ['./homeprojectmenu.component.css'],
})
export class HomeprojectmenuComponent implements OnInit {
  homepage;
  constructor() {
    this.homepage = false;
  }

  ngOnInit(): void {}
  title = 'Defect Dashboard';
}
