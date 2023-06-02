import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { ProjectviewComponent } from './projectview/projectview.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { HelppageComponent } from './helppage/helppage.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'registration', component: RegistrationPageComponent },
  { path: 'home', component: ProjectviewComponent },
  { path: 'create-project', component: CreateProjectComponent },
  { path: 'help-page', component: HelppageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
