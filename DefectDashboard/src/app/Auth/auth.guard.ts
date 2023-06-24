import { BackendConnectService } from './../Service/backend-connect.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private user: BackendConnectService, private route: Router) {}
  isLoggedIn: boolean = false;

  canActivate() {
    this.user.isLoggedIn.subscribe((res: any) => {
      this.isLoggedIn = res;
    });
    if (this.isLoggedIn) {
      return true;
    } else {
      alert('Please Login !!');
      this.route.navigate(['login']);
      return false;
    }
  }
}
