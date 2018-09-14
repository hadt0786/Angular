import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DirectiveComponent } from './directive/directive.component';
import { TestDirective } from './test.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveComponent,
    TestDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
