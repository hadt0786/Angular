import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent implements OnInit {
  myAppTitle = "Binding Example";
  
  BindingMaterial = ['fevicol','feviquick'];

  imageLink = "https;//www.pidlite.com/wp-contents/uploads/2016/08/SIde.image.png";

  textContent = "Change the content";

  myBackground = 'green';

  myButton = true;

  fontS = "50px";

  marginT = "200px";

  marginL = "300px";

  userInput = "Default text";
  
  mySaveFunction(){
    alert("Button was pressed");
  }

  constructor() {
   
   }

   background(){
    this.myBackground = "red";
   }
   mouseHover(){
     this.myBackground = "yellow";
   }
   mouseDoubleClick(){
    this.myBackground = "yellow";
  }
  // mouseOut(){
  //   this.
  // }
  
  myDisplayButton(){
    console.log("the latest event");
  }
  mySecondButton($event){
    console.log($event);
    event.stopPropagation();
  }

  userkeypressed(){
    console.log(this.userInput);
  }

  ngOnInit() {
  }

}
