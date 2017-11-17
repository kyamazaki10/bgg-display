import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { BggService } from './../../shared/services/bgg.service';
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
    private bggService: BggService,
    private userService: UserService
  ) {
    Object.assign(this, { single, multi });
  }

  ngOnInit(): void {
    this.user = (this.user) ? this.userService.user : this.userService.getUser(this.route);
    this.getMostPlayed();
  }

  getMostPlayed(): void {
    Promise.all([
      this.getPlay('plays12', '2016-11-16'),
      this.getPlay('plays6', '2017-05-16'),
      this.getPlay('plays3', '2017-08-16')
    ]).then(() => this.updateDashboard());
  }

  getPlay(play: string, startDate: string) {
    return this.bggService.userPlays(this.user.id, startDate)
      .then(plays => this.user[play] = plays.plays.play);
  }

  updateDashboard() {

  }

  calculateStartDate(months: string) {
  }
}