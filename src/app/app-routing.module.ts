import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BggUserCollectionComponent } from './bgg/bgg-user-collection.component';
import { SearchComponent } from './search.component';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent
  },
  {
    path: 'bgg/:user',
    component: BggUserCollectionComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }