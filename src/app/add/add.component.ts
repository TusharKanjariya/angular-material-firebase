import { Component, OnInit } from '@angular/core';
import {MaterialDesign} from '../material';
import {MatSnackBar} from '@angular/material';
import {StudentService} from '../student.service';
import {MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(public material:MaterialDesign,public service:StudentService,public snackBar:MatSnackBar,public dialogRef:MatDialogRef<AddComponent>) { }

  ngOnInit() {
    this.service.checkUserStatus();
  }
  addData(){
    this.service.addStudent(this.service.form.value);
    this.service.form.reset();
    this.snackBar.open("Data Submitted Successfully","Close",{
      duration:1000
    });
    this.onReset();
  }
  onReset(){
    this.service.form.reset();
    this.dialogRef.close();
  }
}
