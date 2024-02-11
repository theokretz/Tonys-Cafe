import { Component, NgModule } from '@angular/core';
import { LightgalleryModule } from 'lightgallery/angular';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';}

@NgModule({
  declarations: [AppComponent],
  imports: [
    Component
    NgModule,
    LightgalleryModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
