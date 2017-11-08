import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BggService } from './shared/services/bgg.service';
import { NavigationComponent } from './navigation/navigation.component';
import { SearchComponent } from './search.component';
import { SortTableColumnComponent } from './shared/components/sort-table-column.component';
import { SortTableDirective } from './shared/components/sort-table.directive';
import { SortTableService } from './shared/services/sort-table.service';
import { UserCollectionComponent } from './users/user-collection/user-collection.component';
import { UserDataPipe } from './users/user-data.pipe';
import { UserNavigationComponent } from './users/user-navigation/user-navigation.component';
import { UserPlaysComponent } from './users/user-plays/user-plays.component';
import { UserService } from './shared/services/user.service';
import { UserDashboardComponent } from './users/user-dashboard/user-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SearchComponent,
    SortTableColumnComponent,
    SortTableDirective,
    UserCollectionComponent,
    UserDashboardComponent,
    UserDataPipe,
    UserNavigationComponent,
    UserPlaysComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    NgxChartsModule
  ],
  providers: [
    BggService,
    SortTableService,
    UserService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }