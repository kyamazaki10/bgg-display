import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { BggService } from './shared/services/bgg.service';
import { NavigationComponent } from './navigation/navigation.component';
import { SearchComponent } from './search.component';
import { SortTableColumnComponent } from './shared/components/sort-table-column.component';
import { SortTableDirective } from './shared/components/sort-table.directive';
import { SortTableService } from './shared/services/sort-table.service';
import { UserCollectionComponent } from './users/user-collection.component';
import { UserDataPipe } from './users/user-data.pipe';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SearchComponent,
    SortTableColumnComponent,
    SortTableDirective,
    UserCollectionComponent,
    UserDataPipe
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
    SortTableService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }