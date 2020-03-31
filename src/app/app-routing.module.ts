import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EcartComponent} from'./ecart/ecart.component'
import {CartComponent} from './ecart/cart/cart.component';
import {RoutecartComponent} from './ecart/routecart/routecart.component'
const routes: Routes = [{
  path:'Ecart',
  component : EcartComponent},
  {
    path:'',
    redirectTo:'Ecart/Dashboard',
    pathMatch:'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
