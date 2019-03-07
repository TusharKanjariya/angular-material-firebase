import { Component } from '@angular/core';
import {MaterialDesign} from './material';
import { AngularFireAuth } from 'angularfire2/auth';
import { StudentService } from './student.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student-angularFire';
  constructor(public service:StudentService,public material:MaterialDesign,private auth:AngularFireAuth){

  }

  logout(){
    this.auth.auth.signOut();
  }
}
