import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';
import { Student } from '../Student';

@Component({
  selector: 'app-show-student',
  templateUrl: './show-student.component.html',
  styleUrls: ['./show-student.component.css']
})
export class ShowStudentComponent implements OnInit {
Student:StudentServiceService;
StuArr:Student[]=[];
updateboo:boolean=true;

  constructor(Student:StudentServiceService) {
    this.Student=Student;
   }
deleteData(st){
  let index=this.StuArr.indexOf(st);
  this.StuArr.splice(index,1);

}
update(){
  this.updateboo=!this.updateboo;


}
UpdateData(d:Student){
  this.Student.updateDaw(d);

}
  ngOnInit() {
    this.Student.fetchData();
    this.StuArr=this.Student.getData();

  }

}
