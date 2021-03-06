import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import * as moment from 'moment';

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
  error: boolean = false;
  totalPlays: any[];
  totalOwned: any[];

  pieView = [ 330, 250 ];
  cardView = [ 500, 200 ];
  showLabels = true;
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
    this.route.params.subscribe(params => {
      this.user = (this.userService.user && this.userService.user.id === params.user) ?
        this.userService.user : this.userService.getUser(this.route);

      if (this.user.collection) {
        this.getCollectionStats();
        this.getPlays();
      } else {
        this.getCollection();
      }
    });
  }

  getCollection(): void {
    this.bggService.userCollection(this.user.id)
      .then(collection => {
        if (collection) {
          this.user.collection = collection;
          this.getCollectionStats();
          this.getPlays();
        } else {
          this.error = true;
        }
      });
  }

  getCollectionStats(): void {
    let totalPlays = 0;
    let totalOwned = 0;

    for (let game of this.user.collection) {
      totalPlays += parseInt(game.numplays[0]);
      totalOwned += parseInt(game.status[0].$.own[0]);
    }

    this.totalPlays = [{ 'name': 'totalPlays', 'value': totalPlays }];
    this.totalOwned = [{ 'name': 'totalOwned', 'value': totalOwned }];
  }

  getPlays(): void {
    if (! this.user.plays12) {
      this.getPlaysWithStartDate('plays12', this.calculateStartDate(12));
      this.getPlaysWithStartDate('plays6', this.calculateStartDate(6));
      this.getPlaysWithStartDate('plays3', this.calculateStartDate(3));
    }
  }

  getPlaysWithStartDate(play: string, startDate: string) {
    this.user[play] = null;

    return this.bggService.userPlays(this.user.id, startDate)
      .then(collection => (collection) ?
        this.user[play] = this.getTopPlays(collection, 5) :
        this.error = true
      );
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

  calculateStartDate(months: number) {
    return moment().subtract(months, 'months').format('YYYY-MM-DD');
  }

  cardPlayedLabel() {
    return 'Total Games Played';
  }

  cardOwnedLabel() {
    return 'Total Games Owned';
  }
}