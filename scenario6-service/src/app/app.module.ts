import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { ScenarioServiceService } from './scenario-service.service';
import { Component1Component } from './component1/component1.component';

@NgModule({
  declarations: [
    AppComponent,
    Component2Component,
    Component3Component,
    Component1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ScenarioServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
