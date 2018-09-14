import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EcommerceFirstComponent } from './ecommerce-first-component.component.ts/ecommerce-first-component.component.ts.component';
import { EcommerceFirstService } from './ecommerce-first-service.service.ts/ecommerce-first-service.service.ts.component';

@NgModule({
  declarations: [
    AppComponent,
    EcommerceFirstComponent.Component.TsComponent,
    EcommerceFirstService.Service.TsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
