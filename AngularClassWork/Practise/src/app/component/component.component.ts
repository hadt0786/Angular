import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {

  constructor(private myService: ServiceService) { 
    console.log(this.myService.getTest());
  }

  ngOnInit() {
  }

}
