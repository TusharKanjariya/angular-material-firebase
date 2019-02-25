import { Component } from '@angular/core';
import {MaterialDesign} from './material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student-angularFire';
  constructor(public material:MaterialDesign){

  }
}
