import { Routes } from '@angular/router'
import {MainComponent} from "./main/main.component";

export const routes: Routes = [
  // {
  //   path: 'login',
  //   component:LoginComponent,
  //   // canActivate: [authGuard]
  // },
  // {
  //   path: 'register',
  //   component: RegisterComponent,
  // },
  // {
  //   path: 'main',
  //   component: MainComponent
  // },
  {
    path: '**',
    component: MainComponent,
    pathMatch: 'full'
  }
]
