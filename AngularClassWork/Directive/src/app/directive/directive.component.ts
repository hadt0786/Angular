import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent  {

  title ="app";
  coursesList=["Fullstack","MeanStack","FrontEnd","Back End"];
  //coursesList = [];

  courseNumber = 3;

studentList : any[]=[
  {
    "name":"001"
  },
  {
    "name":"002"
  },
  {
    "name":"003"
  },
  {
    "name":"004"
  },

  
  
]

userInput = "Default text";

userKeyPress()
{
  console.log("The user has entered the value" + this.userInput);
}

addNewCourse(){
  this.coursesList.push("Devops");
}

removeCourse(){
  this.coursesList.pop();
}
}


