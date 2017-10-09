import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BggUserCollectionComponent } from './bgg/bgg-user-collection.component';
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
    component: BggUserCollectionComponent
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