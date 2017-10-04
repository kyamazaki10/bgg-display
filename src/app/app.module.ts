import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// imports for loading and configuring in-memory web api
import { InMemoryDataService } from './in-memory-data.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { BggService } from './bgg/bgg.service';
import { BggUsersComponent } from './bgg/bgg-users.component';
import { DashboardComponent } from './dashboard.component';
import { SearchComponent } from './search.component';
import { UserDetailComponent } from './user-detail.component';
import { UserSearchComponent } from './user-search.component';
import { UserService } from './user.service';
import { UsersComponent } from './users.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BggUsersComponent,
    DashboardComponent,
    SearchComponent,
    UserDetailComponent,
    UserSearchComponent,
    UsersComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    InMemoryWebApiModule.forRoot(InMemoryDataService, {
      passThruUnknownUrl: true
    })
  ],
  providers: [
    BggService,
    UserService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }