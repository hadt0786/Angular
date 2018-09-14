import {CoursesComponent} from './wsa/wsa.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {WsaServices} from './wsa/wsa.service';


import { AppComponent } from './app.component';
import { Component1Component } from './modules/main/components/component1/component1.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    Component1Component,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    WsaServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
