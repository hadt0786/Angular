import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFirestoreDocument } from 'angularfire2/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';
    Category=" Select Category";
    Prority="Select Prority";
     itemCollection: AngularFirestoreCollection<Item>;


  constructor(public db: AngularFirestore) {
 this.itemCollection=this.db.collection('family');
   }

  saveTodo(inputdata){
     const documentId = this.db.createId();
     this.itemCollection.doc(documentId).set({ taskname: inputdata, category: this.Category, prority: this.Prority , id: documentId });

  	
  }

  changeCategory(passedCategory){
    this.Category=passedCategory;
  }

    changePrority(passedPrority){
    this.Prority=passedPrority;
  }
}
interface Item {
  taskname?: string;
  category?: string;
  prority?: string;
  id?: string;
}
