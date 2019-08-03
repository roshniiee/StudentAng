import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';
import { Student } from '../Student';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
Student:StudentServiceService;
stu:Student;
  constructor(Student:StudentServiceService) {
    this.Student=Student;
   }

   
  ngOnInit() {
  }
  Add(e:any){
    this.stu=new Student(e.name,e.id);
   this.Student.AddData(this.stu);

  }
}
