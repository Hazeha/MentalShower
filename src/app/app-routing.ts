import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ControlpanelComponent } from './controlpanel/controlpanel.component';
import { FanContainerComponent } from './fan-container/fan-container.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LearningElementComponent } from './learning-element/learning-element.component';
import { FanBasicComponent } from './fan-basic/fan-basic.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FanAdvancedComponent } from './fan-advanced/fan-advanced.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
export const routing = RouterModule.forRoot([
    { path: '', component: IndexComponent },
    { path: 'index', component: IndexComponent },
    { path: 'cp', component: ControlpanelComponent },
    { path: 'advancesetting', component: FanAdvancedComponent },
    { path: 'login', component: LoginComponent },
    { path: 'profile', component: MyProfileComponent },
    { path: 'login/:invalidLoginMessage', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'signup/:invalidLoginMessage', component: SignupComponent },
    { path: 'cp/fansetting', component: FanBasicComponent },
    { path: 'cp/fan', component: FanContainerComponent },
    { path: 'learningelement', component: LearningElementComponent },
    { path: '**', component: PageNotFoundComponent },

]);


