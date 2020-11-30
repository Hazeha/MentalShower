import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {MaterialModule} from '../material/material.module';

import { routing } from './app-routing';
import {AppRoutingModule} from './app.routing';


import { IndexComponent } from './index/index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LearningElementComponent } from './learning-element/learning-element.component';

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import {MatCardModule} from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ControlpanelComponent } from './controlpanel/controlpanel.component';
import { FanContainerComponent } from './fan-container/fan-container.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from "@angular/material/tabs";
import {MatFormFieldModule} from "@angular/material/form-field";
import { FanBasicComponent } from './fan-basic/fan-basic.component';
import { FanAdvancedComponent } from './fan-advanced/fan-advanced.component';
import {MatSliderModule} from "@angular/material/slider";



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    NavComponent,
    ControlpanelComponent,
    FanContainerComponent,
    FanBasicComponent,
    FanAdvancedComponent
    HomeComponent,
    PageNotFoundComponent,
    LearningElementComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
      routing,
      MatToolbarModule,
      MatButtonModule,
      MatCardModule,
      FontAwesomeModule,
      MatStepperModule,
      MatTabsModule,
      MatFormFieldModule,
      MatSliderModule
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
