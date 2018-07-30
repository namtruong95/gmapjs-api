import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBnOIF3FOc7dXoxBBjxTeEXyHQsRXNkRwo',
      libraries: ['places'],
      apiVersion: '3.31'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
