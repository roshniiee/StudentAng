import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ShowStudentComponent } from './show-student/show-student.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StudentServiceService } from './student-service.service';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule} from '@angular/forms';
import { SearchstudentComponent } from './searchstudent/searchstudent.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    ShowStudentComponent,
    SearchstudentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HttpClient,StudentServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
