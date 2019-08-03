import { Routes, RouterModule } from '@angular/router';
import { ShowStudentComponent } from './show-student/show-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { NgModule } from '@angular/core';
import { SearchstudentComponent } from './searchstudent/searchstudent.component';

 


const routes: Routes = [
  {
  path: 'app-add-student',
  component : AddStudentComponent
  },
  {
    path : 'app-show-student',
    component : ShowStudentComponent
    
  },
  {
    path:'app-searchstudent',
    component:SearchstudentComponent

    
  }
  

];

 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 