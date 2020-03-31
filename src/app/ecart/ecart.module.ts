import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
import { EcartComponent } from './ecart.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { SortfilterComponent } from './sortfilter/sortfilter.component';
import { Ng5SliderModule } from 'ng5-slider';
import { SortlistComponent } from './sortlist/sortlist.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { Routes, RouterModule } from '@angular/router';
import { RoutecartComponent } from './routecart/routecart.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FilterDialogComponent } from './filter-dialog/filter-dialog.component';
import { SortDialogComponent } from './sort-dialog/sort-dialog.component';

const routes: Routes = [
  {
  path:'Ecart',
  component : EcartComponent,
  children:[
    {
      path:'Cart',
      component:CartComponent
    },
   
    {
      path:'Dashboard',
      component:RoutecartComponent
    }
  ]
},
{
  path:'  ',
  redirectTo:'Ecart/Dashbaord',
  pathMatch:'full'
}
];

@NgModule({
  declarations: [DashbaordComponent, EcartComponent, HeaderComponent, SortfilterComponent, SortlistComponent, FooterComponent, CartComponent, RoutecartComponent, FilterDialogComponent, SortDialogComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    Ng5SliderModule,
    MatDialogModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [FilterDialogComponent,SortDialogComponent],
  exports: [RouterModule]

})
export class EcartModule {
  
 }
