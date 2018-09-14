import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FirstServiceService} from './first-service.service'
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [FirstServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
