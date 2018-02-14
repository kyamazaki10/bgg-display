import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { UserCollectionComponent } from './users/user-collection/user-collection.component';
import { UserDashboardComponent } from './users/user-dashboard/user-dashboard.component';
import { UserPlaysComponent } from './users/user-plays/user-plays.component';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent
  },
  {
    path: 'users/:user/dashboard',
    component: UserDashboardComponent
  },
  {
    path: 'users/:user/collection',
    component: UserCollectionComponent
  },
  {
    path: 'users/:user/plays',
    component: UserPlaysComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }