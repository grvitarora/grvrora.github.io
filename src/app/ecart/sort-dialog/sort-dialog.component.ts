import { Component, OnInit } from '@angular/core';
import {MatDialogRef } from '@angular/material/dialog';
import {DashboardService} from '../dashboard/dashboard.service'
@Component({
  selector: 'app-sort-dialog',
  templateUrl: './sort-dialog.component.html',
  styleUrls: ['./sort-dialog.component.css']
})
export class SortDialogComponent implements OnInit {
  state:string;

  constructor( private dialogRef: MatDialogRef<SortDialogComponent>,private dashboardservice:DashboardService) { }

  ngOnInit(): void {
  }
  
  onConfirmClick(): void {
    this.dialogRef.close(true);
  }
  sortdata(state:string){
    this.state=state;
  }
  onApplyClick():void{
    this.dashboardservice.sortList(this.state)

    this.dialogRef.close(true);

  }

}
