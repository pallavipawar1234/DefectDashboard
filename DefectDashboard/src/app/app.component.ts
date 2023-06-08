import { Component } from '@angular/core';
import { NavigationStart, Router, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Defect Dashboard';
  status = 'Home >> Login';
  constructor() {}
}
