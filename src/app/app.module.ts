import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { BggService } from './bgg/bgg.service';
import { BggSortTableColumn } from './bgg/bgg-sort-table-column.component';
import { BggSortTableDirective } from './bgg/bgg-sort-table.directive';
import { BggSortTableService } from './bgg/bgg-sort-table.service';
import { BggUserCollectionComponent } from './bgg/bgg-user-collection.component';
import { NavigationComponent } from './navigation.component';
import { SearchComponent } from './search.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BggSortTableColumn,
    BggSortTableDirective,
    BggUserCollectionComponent,
    NavigationComponent,
    SearchComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [
    BggService,
    BggSortTableService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }