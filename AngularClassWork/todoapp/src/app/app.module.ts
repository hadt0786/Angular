import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import{ AngularFireModule } from 'angularfire2';
import{ AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { TasklistComponent } from './tasklist/tasklist.component';


@NgModule({
  declarations: [
    AppComponent,
    TasklistComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase,'angularfs'),
AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
