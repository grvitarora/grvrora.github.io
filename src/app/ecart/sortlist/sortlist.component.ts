import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../dashboard/dashboard.service'
import {HostListener} from "@angular/core";
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FilterDialogComponent } from '../filter-dialog/filter-dialog.component';
import {SortDialogComponent} from '../sort-dialog/sort-dialog.component'
@Component({
  selector: 'app-sortlist',
  templateUrl: './sortlist.component.html',
  styleUrls: ['./sortlist.component.css']
})
export class SortlistComponent implements OnInit {
  activeclass;
  mobile:boolean=false;
  public innerWidth: any;

  constructor(private dashboardservice:DashboardService,private matDialog: MatDialog) { }

  ngOnInit(): void {
   this.onResize(event)

  }
  sortdata(state:string){
    this.dashboardservice.sortList(state)
    this.activeclass=state;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
  console.log(window.innerWidth);
  this.innerWidth = window.innerWidth;
  console.log(this.innerWidth);
  if(this.innerWidth<768){
    this.mobile=true;
    console.log(this.mobile)
  }else{
    this.mobile=false;
  }
}
openSortDialog() {
  const dialogRef = this.matDialog.open(SortDialogComponent);
}
openFilterDailog() {
  this.matDialog.open(FilterDialogComponent);
}

}
