import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';
import { routing } from './app-routing';
import { AppComponent } from './app.component';
import { ControlpanelComponent } from './controlpanel/controlpanel.component';
import { FanAdvancedComponent } from './fan-advanced/fan-advanced.component';
import { FanBasicComponent } from './fan-basic/fan-basic.component';
import { FanContainerComponent } from './fan-container/fan-container.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { LearningElementComponent } from './learning-element/learning-element.component';
import { NavComponent } from './nav/nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    NavComponent,
    ControlpanelComponent,
    FanContainerComponent,
    FanBasicComponent,
    FanAdvancedComponent,
    HomeComponent,
    PageNotFoundComponent,
    LearningElementComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    FontAwesomeModule,
    MaterialModule,
    HttpClientModule
    // AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
