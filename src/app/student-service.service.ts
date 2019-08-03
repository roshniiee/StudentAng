import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './Student';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  http:HttpClient;
  StudentArray:Student[]=[];
  fetch:boolean=false;

  constructor(http:HttpClient) {
    this.http=http;
   }

   fetchData(){
     this.http.get('./assets/Student.json').subscribe(
data=>{
  if(!this.fetch){
this.convert(data);
this.fetch=true;
}
}
     )
   }
   convert(data){
     for(let s of data){
       let stuobj=new Student(s.name,s.id);
       this.StudentArray.push(stuobj);
     }     
   }
   getData():Student[]{
     return this.StudentArray;
   }
  AddData(s:any){
    this.StudentArray.push(s);
  }
  updateDaw(d:Student){
    let sid=d.id;
for(let i=0;i<this.StudentArray.length;i++){
  if(sid==this.StudentArray[i].id){
    this.StudentArray[i].id=d.id;
    this.StudentArray[i].name=d.name;
  }
}



  }
  Studentse:Student[];
searchData(data):Student[] {
this.Studentse=[];
for(let e of this.StudentArray) {
if(e.id==data.id) {
this.Studentse.push(e);
 }
 }
return this.Studentse;
 }
}
