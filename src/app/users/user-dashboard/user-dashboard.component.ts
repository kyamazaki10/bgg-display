import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { User } from './../user';
import { UserService } from './../../shared/services/user.service';
import { single, multi } from '../data';

@Component({
  selector: 'user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: [ './user-dashboard.component.css' ]
})
export class UserDashboardComponent implements OnInit {
  user: User;
  single: any[];
  multi: any[];

  view = [ 350, 300 ];
  showLegend = false;
  showLabels = true;
  explodeSlices = false;
  doughnut = true;
  colorScheme = {
    domain: [ '#5AA454', '#A10A28', '#C7B42C', '#AAAAAA' ]
  };

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {
    Object.assign(this, { single, multi });
  }

  ngOnInit(): void {
    this.user = (this.user) ? this.userService.user : this.userService.getUser(this.route);
  }
}