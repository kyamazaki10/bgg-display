import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './search.component';
import { UserPlaysComponent } from './users/user-plays/user-plays.component';
import { UsersComponent } from './users/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent
  },
  {
    path: 'users/:user/collection',
    component: UsersComponent
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