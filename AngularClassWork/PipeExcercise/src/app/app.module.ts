import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ZodiacComponent } from './zodiac/zodiac.component';
import { ZodiacpipePipe } from './zodiacpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ZodiacComponent,
    ZodiacpipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
