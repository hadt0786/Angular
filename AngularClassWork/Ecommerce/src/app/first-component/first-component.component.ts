import { Component, OnInit } from '@angular/core';
import {FirstServiceService} from '../first-service.service';
@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  itemname;
  itemcat;
  itemprice;


  constructor(service: FirstServiceService) { 
   this.itemname= service.getItem();
    this.itemcat = service.getPrice();
    this.itemprice = service.getCategory();

  }

  ngOnInit() {
  }

}
