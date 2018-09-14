import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  state = {
    sName:"AKASH",
    sPopulation : 6200000,
    sFormation : new Date(1956,11,11),
    sRating:3.976,
    sCurrency:'INR'
  }

  myText = "Test EstTest EstTest EstTest EstTest EstTest EstTest EstTest EstTest Est";

  constructor() { }

  ngOnInit() {
  }

}
