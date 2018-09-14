import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { ServiceService } from './service.service';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
