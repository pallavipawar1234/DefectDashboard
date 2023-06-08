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
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { HomemenuComponent } from './homemenu/homemenu.component';
import { HomeprojectmenuComponent } from './homeprojectmenu/homeprojectmenu.component';
import { ProjectviewComponent } from './projectview/projectview.component';
import { HelppageComponent } from './helppage/helppage.component';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { BackendConnectService } from './Service/backend-connect.service';

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
    HomemenuComponent,
    HomeprojectmenuComponent,
    ProjectviewComponent,
    HelppageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgApexchartsModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    DragDropModule,
    HttpClientModule,
  ],
  providers: [BackendConnectService],
  bootstrap: [AppComponent],
})
export class AppModule {}
