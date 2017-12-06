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

  view = [ 330, 250 ];
  showLegend = false;
  showLabels = true;
  explodeSlices = false;
  doughnut = true;
  colorScheme = {
    domain: [ '#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99' ]
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
    return this.bggService.userPlays(this.user.id, startDate)
      .then(collection => {
        this.user[play] = this.getTopPlays(collection.plays.play, 5)
      });
  }

  getTopPlays(games: any, number: number) {
    let array = [];

    for (let game of games) {
      let title = game.item[0].$.name;
      let quantity = parseInt(game.$.quantity);
      let duplicate = array.find(object => object.name === title);

      if (! duplicate) {
        array.push({ 'name': title, 'value': quantity });
      } else {
        duplicate.value += quantity;
      }
    }

    return this.sortPlays(array).splice(0, number);
  }

  sortPlays(array: any) {
    return array.sort(function(a, b) {
      return parseInt(b.value) - parseInt(a.value);
    });
  }

  updateDashboard(): void {
    let plays = [ 'plays12', 'plays6', 'plays3' ];

    for (let play of plays) {
      this[play] = [];

      for (let game of this.user[play]) {
        this[play].push({
          'name': game.name,
          'value': game.value
        });
      }
    }
  }

  calculateStartDate(months: string) {
  }
}