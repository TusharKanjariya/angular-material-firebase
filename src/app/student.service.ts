import { Injectable } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private db:AngularFireDatabase) { }
  studentRef:AngularFireList<any>;
  form = new FormGroup({
    key : new FormControl(''),
    name : new FormControl('',Validators.required),
    sem : new FormControl('',Validators.required),
    dept : new FormControl('',Validators.required)
  });

  addStudent(student){
    this.studentRef = this.db.list("/students");
    if(this.form.valid){
      if(this.form.get("key").value){
        this.updateStudent(student);
      }else{
        this.studentRef.push(student);
      }
    }
  }
  getStudent(){
    this.studentRef = this.db.list("/students");
    return this.studentRef;
  }
  fillForm(data){
    this.form.setValue(data);
  }

  updateStudent(data){
    this.studentRef = this.db.list("/students");
    this.studentRef.update(data.key,{
      name : data.name,
      dept : data.dept,
      sem : data.sem
    })
  }

  deleteStudent(key){
    this.studentRef = this.db.list("/students");
    this.studentRef.remove(key);
  }
}
