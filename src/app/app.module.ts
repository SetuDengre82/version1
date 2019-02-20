import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { LoginpageModule } from './loginpage/loginpage.module';
import { TerminalComponent } from './terminal/terminal.component';
import { InterviewerComponent } from './interviewer/interviewer.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { EditorComponent } from './editor/editor.component';

import {  MatToolbarModule,MatSidenavModule, } from '@angular/material';
import { RecruiterComponent } from './recruiter/recruiter.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    LoginpageComponent,
    TerminalComponent,
    InterviewerComponent,
    FeedbackComponent,
    EditorComponent,
    RecruiterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LoginpageModule,
    MatToolbarModule,
    MatSidenavModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
