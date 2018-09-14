import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import{AngularFirestoreModule} from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { FirebasecomponentComponent } from './firebasecomponent/firebasecomponent.component';
import{environment} from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    FirebasecomponentComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase,'angularfirebs'),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
