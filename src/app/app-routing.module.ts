import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BggUsersComponent } from './bgg/bgg-users.component';
import { DashboardComponent } from './dashboard.component';
import { SearchComponent } from './search.component';
import { UserDetailComponent } from './user-detail.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent
  },
  {
    path: 'bgg/:user',
    component: BggUsersComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'users/:id',
    component: UserDetailComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }