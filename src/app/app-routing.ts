import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {ControlpanelComponent} from './controlpanel/controlpanel.component';
import {FanContainerComponent} from './fan-container/fan-container.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {LearningElementComponent} from './learning-element/learning-element.component';

export const routing = RouterModule.forRoot([
    {path: '', component: IndexComponent},
    {path: 'index', component: IndexComponent},
    {path: 'cp', component: ControlpanelComponent},
    {path: 'cp/fan', component: FanContainerComponent},
    { path: 'learningelement', component: LearningElementComponent },
    { path: '**', component: PageNotFoundComponent },

]);


