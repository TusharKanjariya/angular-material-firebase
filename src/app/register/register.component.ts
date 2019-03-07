import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { MaterialDesign } from '../material';
import { AngularFireAuth } from 'angularfire2/auth';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private route: Router, public snackBar: MatSnackBar, public service: StudentService, private MAT: MaterialDesign, private auth: AngularFireAuth) { }

  ngOnInit() {
    
  }

  register(){
    let data = this.service.loginForm.value;
    this.auth.auth.createUserWithEmailAndPassword(data.email,data.password)
    .then(user => {
      this.snackBar.open("Register Successfull","close",{
        duration : 2000
      });
      this.route.navigate(['/']);
    })
    .catch(err => {
      this.snackBar.open(err.message,"close",{
        duration : 2000
      });
    })
  }
}
