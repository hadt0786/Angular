import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFirestoreDocument } from 'angularfire2/firestore';


@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent {
editSignal="none";
  Category=" Select Category";
    Prority="Select Prority";
    editdata="test";
    id="error"
     itemsCollection: AngularFirestoreCollection<Item>;
     itemDocument: AngularFirestoreDocument<Item>;
      items: Observable<Item[]>;

  changeCategory(passedCategory){
    this.Category=passedCategory;
  }

    changePrority(passedPrority){
    this.Prority=passedPrority;
  }

firebaseDeleteCourse(delCourse: Item) {
  debugger;
    console.log("Delete Pressed");
    this.itemDocument = this.db.doc(`family/${delCourse.id}`);
    this.itemDocument.delete();

  }
    
  firebaseUpdateCourse(updateCourse: Item) {
    this.Category=updateCourse.category;
this.Prority=updateCourse.prority;
this.editdata=updateCourse.taskname;
this.id=updateCourse.id;
this.editSignal="block";
console.log(this.editSignal);
         console.log("update Pressed");
  }


  newdata(inputdata){
   this.itemDocument = this.db.doc(`family/${this.id}`);
   this.itemDocument.update({ taskname: inputdata, category: this.Category, prority: this.Prority });
     console.log("update completed");
        this.editSignal="none";
  }

  hideeditpanel(){
    this.editSignal="none";
  }


  constructor(public db: AngularFirestore) {

 this.items = this.db.collection('family').valueChanges();
  this.items.subscribe(items => { console.log(items); });
   }


}
interface Item {
  taskname?: string;
  category?: string;
  prority?: string;
    id?: string;
}
