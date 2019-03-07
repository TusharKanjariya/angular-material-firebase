import {MatButtonModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
@NgModule({
  imports: [MatProgressSpinnerModule,MatSortModule,MatPaginatorModule,MatTableModule,MatInputModule,MatButtonModule,MatToolbarModule,MatIconModule,MatMenuModule],
  exports: [MatProgressSpinnerModule,MatSortModule,MatPaginatorModule,MatTableModule,MatInputModule,MatButtonModule,MatToolbarModule,MatIconModule,MatMenuModule]
})
export class MaterialDesign { }
