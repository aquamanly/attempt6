import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponentBingBongComponent } from './demo-component-bing-bong/demo-component-bing-bong.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponentBingBongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
