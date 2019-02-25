import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesign } from './material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentService } from './student.service';
import { AddComponent } from './add/add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FetchComponent } from './fetch/fetch.component';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule ,MatDialogRef} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    FetchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialDesign,
    ReactiveFormsModule,
    MatSnackBarModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatTableModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [StudentService,{provide: MatDialogRef, useValue: {}}],
  bootstrap: [AppComponent],
  entryComponents: [AddComponent]
})
export class AppModule { }
