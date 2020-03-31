import { Component, OnInit } from '@angular/core';
import {EcartService} from '../ecart.service';
import {Observable} from'rxjs/observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   HeaderCount$:Observable<number>;
  constructor(private ecartservice:EcartService) { }

  ngOnInit(): void {
      this.HeaderCount$=this.ecartservice.HeaderCount$
      console.log(this.HeaderCount$);
    }

}
