import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Iphone11Component } from './iphone11/iphone11.component';
import { WatchComponent } from './watch/watch.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    Iphone11Component,
    WatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
