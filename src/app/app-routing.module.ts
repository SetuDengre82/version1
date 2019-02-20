import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { TerminalComponent } from './terminal/terminal.component';
import { InterviewerComponent } from './interviewer/interviewer.component';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '', redirectTo: 'login', pathMatch:'full',
  },
  {
    path: 'student',
    component: StudentComponent
  },
  {
    path: 'login',
    component: LoginpageComponent
  },
  {
    path: 'terminal',
    component: TerminalComponent
  },
  {
    path: 'interviewer',
    component: InterviewerComponent
  },
  {
    path: 'recruiter',
    component: RecruiterComponent
  },
  {
    path: 'feedback',
    component: FeedbackComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
