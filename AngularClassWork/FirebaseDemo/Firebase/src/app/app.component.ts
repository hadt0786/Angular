import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  a =[];
  
  constructor(db:AngularFirestore){
    db.collection('users').valueChanges().subscribe(p => {
      this.a = p;
      this.title = this.a[0].name;

    }); 
     
  }
}
