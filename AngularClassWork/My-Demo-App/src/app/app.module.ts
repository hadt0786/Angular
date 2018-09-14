import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GitComponent } from './git/git.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { EventComponent } from './event/event.component';
import { Home2Component } from './home2/home2.component';
import { Home3Component } from './home3/home3.component';
import { Test2Component } from './test2/test2.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    NavbarComponent,
    GitComponent,
    HomeComponent,
    PostComponent,
    EventComponent,
    Home2Component,
    Home3Component,
    Test2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
