import { ProfileComponent } from '../components/profile/profile.component';
import { HomeComponent } from '../components/home/home.component';
import { NewsComponent } from '../components/news/news.component';
import { HistoryComponent } from '../components/history/history.component';
import { NavmenuComponent } from '../components/navmenu/navmenu.component';
import { FindcontestComponent } from '../components/findcontest/findcontest.component';
import { LoginComponent } from '../components/login/login.component';
import { RegistrationComponent } from '../components/registration/registration.component';
import { ContestComponent } from '../components/contest/contest.component';
import {Routes} from '@angular/router';


export const APP_ROUTES_PROVIDER: Routes= [
  {path:'history', component: HistoryComponent},
  {path:'home', component: HomeComponent},
  {path:'profile', component: ProfileComponent},
  {path:'findcontest', component: FindcontestComponent},
  {path:'login', component: LoginComponent},
  {path:'news', component: NewsComponent},
  {path:'registration', component: RegistrationComponent},
  {path:'contest/:id', component: ContestComponent},
  {path:'', component: HomeComponent},
];
