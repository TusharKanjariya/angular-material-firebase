import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from '../student.service';
import { MaterialDesign } from '../material';
import {MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatSort} from '@angular/material';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { AddComponent } from '../add/add.component';
import {MatSnackBar} from '@angular/material';
@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent implements OnInit {

  @ViewChild(MatPaginator) pagination : MatPaginator;
  @ViewChild(MatSort) sorting : MatSort;
  students: any;
  searchKey:string;
  constructor(private service: StudentService, public material: MaterialDesign,public dialog:MatDialog,public snackBar:MatSnackBar) { }
  tableData : MatTableDataSource<any>;
  ngOnInit() {

    this.service.checkUserStatus();

    this.students = this.service.getStudent().snapshotChanges().subscribe(student => {
      let array = student.map(student => {
        return {
          key : student.key ,
          ...student.payload.val()
        }
      })
      this.tableData = new MatTableDataSource(array);
      this.tableData.paginator = this.pagination;
      this.tableData.sort =this.sorting;
    }); 
  }
  displayedColumns: string[] = ['name', 'department', 'semester','actions'];

  onEdit(data){
    let config = new MatDialogConfig();
    config.autoFocus = true;
    config.disableClose = true;
    this.service.fillForm(data);
    this.dialog.open(AddComponent,{});
  }

  onDelete(key){
    this.service.deleteStudent(key);
    this.snackBar.open("Data Removed Successfully","Close",{
      duration:1000
    });
  }

  filterData(){
    this.tableData.filter = this.searchKey;
  }
}
