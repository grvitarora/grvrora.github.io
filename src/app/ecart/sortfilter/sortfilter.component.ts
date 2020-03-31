import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { DashboardService } from '../dashboard/dashboard.service';
import {HostListener} from "@angular/core";

@Component({
  selector: 'app-sortfilter',
  templateUrl: './sortfilter.component.html',
  styleUrls: ['./sortfilter.component.css']
})
export class SortfilterComponent implements OnInit {
  highValue: number = 60;
  public innerWidth: any;
  mobile:boolean=false;


  value:number=10;
  options: Options = {
    floor: 10,
    ceil: 1000
  };
  constructor(private dashbaordservice:DashboardService) { }

  ngOnInit(): void {
    this.onResize(event)

  }
  filter(){
    this.dashbaordservice.filterList(this.highValue)
 
  }
  @HostListener('window:resize', ['$event'])
  onResize(events) {
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

}
