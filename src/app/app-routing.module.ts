import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NetworkComponent } from './network/network.component';
import { PeopleComponent } from './people/people.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { TvdetailsComponent } from './tvdetails/tvdetails.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [


  { path: '', redirectTo: 'home', pathMatch: "full" },
  { path: 'home',canActivate:[AuthGuard] ,  component: HomeComponent },
  { path: 'about', canActivate:[AuthGuard] , component: AboutComponent },
  { path: 'movies', canActivate:[AuthGuard] , component: MoviesComponent },
  { path: 'tv', canActivate:[AuthGuard] , component: TvComponent },
  { path: 'contact', canActivate:[AuthGuard] , component: NetworkComponent },
  { path: 'people', canActivate:[AuthGuard] , component: PeopleComponent },
  { path: 'moviedetails/:id',  component: MoviedetailsComponent },
  { path: 'tvdetails/:id', component: TvdetailsComponent },
  {
    path: 'settings',canActivate:[AuthGuard] ,
    loadChildren: () => import('./setting/setting.module').then(m => m.SettingModule)
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
