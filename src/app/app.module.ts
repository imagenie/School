import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ErrorComponent } from './error/error.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { AdmissionComponent } from './admission/admission.component';
import { FeesComponent } from './fees/fees.component';
import { AttendenceComponent } from './attendence/attendence.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ErrorComponent,
    StudentComponent,
    TeacherComponent,
    StudentHomeComponent,
    AdmissionComponent,
    FeesComponent,
    AttendenceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
