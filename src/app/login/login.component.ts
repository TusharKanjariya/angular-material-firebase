import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { MaterialDesign } from '../material';
import { AngularFireAuth } from 'angularfire2/auth';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router, public snackBar: MatSnackBar, public service: StudentService, private MAT: MaterialDesign, private auth: AngularFireAuth) { }

  ngOnInit() {
    this.service.checkUserStatus();
  }

  login() {
    let user = this.service.loginForm.value;
    this.auth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then(firebaseUser => {
        console.log(firebaseUser);
        this.snackBar.open("Successfully Logged in", "Close", {
          duration: 1000
        });
        this.route.navigate(['/dashboard']);
      })
      .catch(err => {
        console.log(err);
        this.snackBar.open("Username or Password is wrong", "Close", {
          duration: 3000
        });
      })
    this.service.loginForm.reset();
  }
  signinWithGoogle(){
    this.auth.auth.signInWithPopup(new auth.GoogleAuthProvider())
    .then(user => {
      this.route.navigate(['/dashboard']);
      this.snackBar.open("Welcome " + this.auth.auth.currentUser.displayName,"close",{
        duration : 3000
      })
    })
    .catch(err => {
      this.snackBar.open(err.message,"close",{
        duration : 2000
      })
    })
  }
}

