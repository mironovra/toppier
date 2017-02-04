import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { HomeComponent } from '../components/home/home.component';
import { NewsComponent } from '../components/news/news.component';
import { HistoryComponent } from '../components/history/history.component';
import { NavmenuComponent } from '../components/navmenu/navmenu.component';
import { FindcontestComponent } from '../components/findcontest/findcontest.component';
import { LoginComponent } from '../components/login/login.component';
import { RegistrationComponent } from '../components/registration/registration.component';
import { ContestComponent } from '../components/contest/contest.component';
import { APP_ROUTES_PROVIDER } from './app.routes';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
    NewsComponent,
    HistoryComponent,
    NavmenuComponent,
    FindcontestComponent,
    LoginComponent,
    RegistrationComponent,
    ContestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES_PROVIDER)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
