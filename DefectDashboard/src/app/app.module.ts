import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CreateProjectComponent } from './create-project/create-project.component';
import { CreateIssueComponent } from './create-issue/create-issue.component';
import { ReviewProjectComponent } from './review-project/review-project.component';
import { ReviewIssueComponent } from './review-issue/review-issue.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { ProjectStatusPageComponent } from './project-status-page/project-status-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateProjectComponent,
    CreateIssueComponent,
    ReviewProjectComponent,
    ReviewIssueComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    ProjectStatusPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgApexchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
