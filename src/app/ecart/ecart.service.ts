import { Injectable } from '@angular/core';
import {Subject,BehaviorSubject} from 'rxjs';
import {Observable} from 'rxjs/observable'
@Injectable({
  providedIn: 'root'
})
export class EcartService {
  HeaderCountBS:BehaviorSubject<number>=new BehaviorSubject(undefined);
  HeaderCount$:Observable<number>=this.HeaderCountBS;
  cartdetailsBS:BehaviorSubject<{}>=new BehaviorSubject(undefined);
  cartdetails$:Observable<{}>=this.cartdetailsBS;
  TotalPayableBS:BehaviorSubject<number>=new BehaviorSubject(0);
  TotalPayable$=this.TotalPayableBS;
  priceBS:BehaviorSubject<number>=new BehaviorSubject(0);
  priceBS$=this.priceBS;
  public cartdata;
  public cartcount:number=0;
  constructor() { }
  resetheadcount(){
    this.cartcount=0;
    this.HeaderCountBS.next(this.cartcount);
  }
  setHeaderCount(count:string){
    count=='minus'?this.cartcount--:this.cartcount++;
    this.HeaderCountBS.next(this.cartcount);
  }
  getHeaderCount(){
    return this.HeaderCount$=this.HeaderCountBS;

  }
  setcartdata(data:any){
    const result = [...data.reduce( (p, o) => {
      if (!p.has(o.id)) p.set(o.id, { ...o, count: 0 });
      p.get(o.id).count++;
      return p;
  }, new Map).values()];
  let price=0
  let totalpayable=[...result.map(data=>{
    price=data.discountprice*data.count+price;
    return price
  })]

  let nodiscountprice=0
  result.map(data=>{
    nodiscountprice=data.price*data.count+nodiscountprice;
    return nodiscountprice
  })
     this.cartdata = result.filter((result, index, self) =>
      index === self.findIndex((t) => (t.name === result.name)))
      this.cartdetailsBS.next(this.cartdata);
      this.TotalPayableBS.next(price);
      this.priceBS.next(nodiscountprice);

  }
  incrementCart(data,cartstate:string){
     let updateList=this.cartdata.map(updatelist=>{
     if(data.id==updatelist.id){
        cartstate=='minus'?(updatelist.count>0?updatelist.count--:updatelist.count):updatelist.count++;
       }
       return updatelist
     })
     let price=0
     let totalpayable=[...this.cartdata.map(data=>{
       price=data.discountprice*data.count+price;
       return price
     })]
   
     let nodiscountprice=0
     this.cartdata.map(data=>{
       nodiscountprice=data.price*data.count+nodiscountprice;
       return nodiscountprice
     })
     this.cartdetailsBS.next(this.cartdata);
     this.TotalPayableBS.next(price);
     this.priceBS.next(nodiscountprice);

  }
}
