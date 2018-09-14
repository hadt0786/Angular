import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-firebasecomponent',
  templateUrl: './firebasecomponent.component.html',
  styleUrls: ['./firebasecomponent.component.css']
})
export class FirebasecomponentComponent implements OnInit {

  items:Observable<item[]>;

  itemCollection :AngularFirestoreCollection<item>;
  itemDocument : AngularFirestoreDocument<item>;
  
  myCourseName : "Default Value";
  myCourseDuration:"Default value";

  newCourse:item ={course:"NewCourse",duration:"6months"};
  updatedCourse : item ={course:"updated firebase",duration:"test5month"};
  myCoursename = "Default value";
  myCourseduration = "Default value";
  
  constructor(public db:AngularFirestore) {
    this.items = this.db.collection('courses').valueChanges();
    this.items.subscribe(items=>{console.log(items);});
  this.itemCollection = this.db.collection('courses');

   }
   fbAddCourses(){
     console.log("Addition called");
     this.itemCollection.add(this.newCourse);

    }

    fbDeleteCourses(){
      //console.log("Addition called");
      this.itemDocument = this.db.doc('courses/9999');

      this.itemDocument.delete();
 
     }

     fbUpdateCourses(){
       this.itemDocument = this.db.doc('courses/999');
       this.itemDocument.update(this.updatedCourse);
     }
     firebaseDeleteCourse(delCourse: item) {
      console.log("Delete Pressed");
      this.itemDocument = this.db.doc(`courses/${delCourse.id}`);
      this.itemDocument.delete();
    }
    
  

  firebaseAddCourse(){
    const documentId = this.db.createId();
    this.itemCollection.doc(documentId).set({ 
        coursename: this.myCoursename, 
        duration: this.myCourseduration, 
        id: documentId });
  }

  ngOnInit() {
  }

}

interface item{
  course?:string;
  duration?:string;
  id?:string;
}
