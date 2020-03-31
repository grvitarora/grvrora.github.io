import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {BehaviorSubject, Observable} from 'rxjs';
import { map,tap } from 'rxjs/Operators';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
 private ProductListBS:BehaviorSubject<{}>=new BehaviorSubject(undefined);
 public ProductList$:Observable<{}>=this.ProductListBS.asObservable();
 ProductList;
  constructor(public http:HttpClient) { }

  getProductList():Observable<any>{
   return this.http.get("https://api.myjson.com/bins/qzuzi").pipe(
      map(List=>{
          let productList;
          productList= Object.keys(List).map(newlist=>{
            List[newlist]['discountprice']=List[newlist]['price']-(List[newlist]['price']*List[newlist]['discount']/100);
          })
          this.ProductList=List
         this.ProductListBS.next(List);
      }
     
      ),)
}
sortList(state:string){
  let newsortlist=this.ProductList
if(state=='discount'){
  newsortlist.sort((a, b) => {   
    return a['discount'] - b['discount']
    })
    this.ProductListBS.next(newsortlist);
    }else{
     newsortlist.sort((a, b) => {   
    return a['price'] - b['price']
    })
    newsortlist=state=='desc'?newsortlist.reverse():newsortlist;
  }
  this.ProductListBS.next(newsortlist);

}
filterList(value:number){
 let flist= this.ProductList.filter(List=>{
     return List['price']>=value
     
   })
   this.ProductList=flist;
   this.ProductListBS.next(flist);

}
}