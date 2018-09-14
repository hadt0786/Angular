import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFirestoreDocument } from 'angularfire2/firestore';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent{

  Category="Category";
  Priority = "Priority";


  itemsCollection: AngularFirestoreCollection<Item>;
  itemDocument: AngularFirestoreDocument<Item>;
  items: Observable<Item[]>;

  
  changeCategory(passedCategory){
    this.Category = passedCategory;
  }
  changePriority(passedPriority){
    this.Priority = passedPriority;
  }


  constructor(public db: AngularFirestore) {
    this.items = this.db.collection('Personal').valueChanges();
    this.items.subscribe(items => { console.log(items); });

    this.itemsCollection = this.db.collection('Personal');
  }

  firebaseDeleteCourse(delCourse: Item) {
    console.log("Delete Pressed");
    this.itemDocument = this.db.doc(`Personal/${delCourse.id}`);
    this.itemDocument.delete();
  }

}

interface Item {
  taskname?: string;
  category?: string;
  priority?: string;
  id?: string;
}
