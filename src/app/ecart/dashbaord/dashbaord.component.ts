import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../dashboard/dashboard.service';
import { EcartService } from '../ecart.service'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashbaord.component.html',
  styleUrls: ['./dashbaord.component.css']
})
export class DashbaordComponent implements OnInit {
  public productList$:Observable<{}>;
  constructor(private dashboardservice:DashboardService,private ecartservice:EcartService) { }
  Totalcartprice:number=0;
  CartCount:number=0
  Cartarray=[];
  ngOnInit(): void {
    this.getProductList();
    this.resetheadercount()
  }
  getProductList(){
      this.dashboardservice.getProductList().subscribe((List)=>{
         this.productList$=this.dashboardservice.ProductList$;
      })
    }
  addcart(ListDetails:number,type:string){
    this.ecartservice.setHeaderCount(type);
    this.Cartarray.push(ListDetails);
    this.ecartservice.setcartdata(this.Cartarray);
  }
  resetheadercount(){
    this.ecartservice.resetheadcount();
  }

}
