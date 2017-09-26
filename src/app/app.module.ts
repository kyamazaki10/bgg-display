import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { UserDetailComponent } from './user-detail.component';
import { UserService } from './user.service';
import { UsersComponent } from './users.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserDetailComponent,
    UsersComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }