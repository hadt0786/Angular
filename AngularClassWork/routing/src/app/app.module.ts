import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { GitComponent } from './git/git.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostsComponent } from './posts/posts.component';
import { ErrorComponent } from './error/error.component';


import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import { GithubPostserviceService } from './github-postservice.service';
import { GithubprofileComponent } from './githubprofile/githubprofile.component';
import { GithubProfileserviceService } from './service/githubprofile.service';

@NgModule({
  declarations: [
    AppComponent,
    GitComponent,
    HomeComponent,
    NavbarComponent,
    PostsComponent,
    ErrorComponent,
    GithubprofileComponent
  ],
  imports: [
    
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'followers/:id',
        component:GitComponent
      },
      {
        path:'followers',
        component:GitComponent
      },
      
      {
        path:'posts',
        component:PostsComponent
      },
      {
        path:'profile',
        component:GithubprofileComponent
      },
      {
        path:'**',
        component:ErrorComponent
      }
      
      

    ])
  ],
  providers: [
    GithubPostserviceService,
    GithubProfileserviceService
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
