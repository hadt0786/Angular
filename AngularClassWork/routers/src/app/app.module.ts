import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { GithubfollowersComponent } from './githubfollowers/githubfollowers.component';
import { GithubprofileComponent } from './githubprofile/githubprofile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PostComponent } from './post/post.component';
import { GitComponent } from './git/git.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubfollowersComponent,
    GithubprofileComponent,
    HomeComponent,
    NavbarComponent,
    NotfoundComponent,
    PostComponent,
    GitComponent
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
        path:'follower',
        component:GitComponent
      },
      {
        path:'post',
        component:PostComponent
      },
      {
        path:'**',
        component:NotfoundComponent
      }





    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
