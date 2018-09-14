import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AttributeComponent } from './attribute/attribute.component';
import { SummarypipePipe } from './summarypipe.pipe';
import { PipeComponent } from './pipe/pipe.component';


@NgModule({
  declarations: [
    AppComponent,
    AttributeComponent,
    SummarypipePipe,
    PipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PipeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
