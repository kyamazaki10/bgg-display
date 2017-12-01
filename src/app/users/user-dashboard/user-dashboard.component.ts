import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { BggService } from './../../shared/services/bgg.service';
import { User } from './../user';
import { UserService } from './../../shared/services/user.service';

@Component({
  selector: 'user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: [ './user-dashboard.component.css' ]
})
export class UserDashboardComponent implements OnInit {
  user: User;
  plays12: any[];
  plays6: any[];
  plays3: any[];

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
  ) { }

  ngOnInit(): void {
    this.user = (this.user) ? this.userService.user : this.userService.getUser(this.route);
    this.getMostPlayed();
  }

  getMostPlayed(): void {
    Promise.all([
      this.getPlays('plays12', '2016-11-16'),
      this.getPlays('plays6', '2017-05-16'),
      this.getPlays('plays3', '2017-08-16')
    ]).then(() => this.updateDashboard());
  }

  getPlays(play: string, startDate: string) {
    const sortDefault = {
      sortColumn: 'game',
      sortDirection: 'asc'
    };

    return this.bggService.userCollection(this.user.id, sortDefault, startDate)
      .then(collection => this.user[play] = this.getTopPlays(collection, 5));
  }

  getTopPlays(plays: any, number: number) {
    plays.sort(function(a, b) {
      return parseInt(b.numplays[0]) - parseInt(a.numplays[0]);
    });

    return plays.splice(0, number);
  }

  updateDashboard(): void {
    let plays = [ 'plays12', 'plays6', 'plays3' ];

    for (let play of plays) {
      this[play] = [];

      for (let game of this.user[play]) {
        this[play].push({
          'name': game.name[0]._,
          'value': game.numplays[0]
        });
      }
    }
  }

  calculateStartDate(months: string) {
  }
}