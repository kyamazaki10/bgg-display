import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './search.component';
import { UserCollectionComponent } from './users/user-collection.component';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent
  },
  {
    path: 'users/:user',
    component: UserCollectionComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }