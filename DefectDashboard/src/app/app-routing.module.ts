import { AuthGuard } from './Auth/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { ProjectviewComponent } from './projectview/projectview.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { HelppageComponent } from './helppage/helppage.component';
import { ReviewProjectComponent } from './review-project/review-project.component';
import { ProjectStatusPageComponent } from './project-status-page/project-status-page.component';
import { CreateIssueComponent } from './create-issue/create-issue.component';
import { ReviewIssueComponent } from './review-issue/review-issue.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  {
    path: 'registration',
    component: RegistrationPageComponent,
    canActivate: [AuthGuard],
  },
  { path: 'home', component: ProjectviewComponent },
  {
    path: 'create-project',
    component: CreateProjectComponent,
    canActivate: [AuthGuard],
  },
  { path: 'help-page', component: HelppageComponent },
  {
    path: 'review-project',
    component: ReviewProjectComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'review-issue',
    component: ReviewIssueComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'project-status-page',
    component: ProjectStatusPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create-issue',
    component: CreateIssueComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
