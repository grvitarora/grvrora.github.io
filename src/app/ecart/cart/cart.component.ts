import { Component, OnInit } from '@angular/core';
import {EcartService} from '../ecart.service';
import {Observable} from 'rxjs/observable';
import {of} from 'rxjs'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartdetails$:Observable<{}>;
  TotalPayable$:Observable<number>;
  priceBS$:Observable<number>;
  constructor(private ecartservice:EcartService) { }

  ngOnInit(): void {
    this.cartdetails$=this.ecartservice.cartdetails$;
    this.TotalPayable$=this.ecartservice.TotalPayable$;
    this.priceBS$=this.ecartservice.priceBS$;
  }
 
  updateCart(cartdata,cartstate:string){
   this.ecartservice.incrementCart(cartdata,cartstate);
   this.ecartservice.setHeaderCount(cartstate);
  }

}
