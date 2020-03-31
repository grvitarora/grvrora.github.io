import { Component ,Inject} from '@angular/core';
import {MatDialogRef } from '@angular/material/dialog';
import {DashboardService} from '../dashboard/dashboard.service'
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.css']
})
export class FilterDialogComponent  {
  state:string;
  highValue: number = 60;
  value:number=10;
  options: Options = {
    floor: 10,
    ceil: 1000
  };
  constructor(
   
    private dialogRef: MatDialogRef<FilterDialogComponent>,private dashboardservice:DashboardService) {

  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }
 
  onApplyClick():void{
    this.dashboardservice.filterList(this.highValue)

    this.dialogRef.close(true);

  }


}
