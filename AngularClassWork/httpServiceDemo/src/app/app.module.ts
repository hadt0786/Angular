import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NewhttpService } from './newhttp.service';
import { HttpcomponentComponent } from './httpcomponent/httpcomponent.component';
import { HttperrorComponent } from './httperror/httperror.component';

@NgModule({
  declarations: [
    AppComponent,
  
    HttpcomponentComponent,
  
    HttperrorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [NewhttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
