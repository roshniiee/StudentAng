import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';
import { Student } from '../Student';

@Component({
  selector: 'app-searchstudent',
  templateUrl: './searchstudent.component.html',
  styleUrls: ['./searchstudent.component.css']
})
export class SearchstudentComponent implements OnInit {
studentser:StudentServiceService;
Stud:Student[];
  constructor(studentser:StudentServiceService) {
    this.studentser=studentser;
   }
  search(data) {
    this.Stud=this.studentser.searchData(data);
     }
  ngOnInit() {
  }

}
