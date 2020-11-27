import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import { IndexComponent } from './index/index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { HeaderComponent } from './header/header.component';
//import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
//    IndexComponent,
//    HeaderComponent,
//    NavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
