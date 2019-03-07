import { Injectable } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  isLogged:boolean = false;

  constructor(private route:Router,private db:AngularFireDatabase,private auth:AngularFireAuth) { }
  studentRef:AngularFireList<any>;
  form = new FormGroup({
    key : new FormControl(''),
    name : new FormControl('',Validators.required),
    sem : new FormControl('',Validators.required),
    dept : new FormControl('',Validators.required)
  });

  loginForm = new FormGroup({
    email : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.minLength(6),Validators.required])
  })
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
  checkUserStatus(){
    this.auth.auth.onAuthStateChanged(user => {
      if(!user){
        this.isLogged = false;
        this.route.navigate(['/']);
      }else{
        this.isLogged = true;
      }
    });
  }
  deleteStudent(key){
    this.studentRef = this.db.list("/students");
    this.studentRef.remove(key);
  }
}
