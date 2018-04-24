import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BggService } from './../../shared/services/bgg.service';
import { User } from './../user';
import { UserService } from './../../shared/services/user.service';

@Component({
  selector: 'user-collection',
  templateUrl: './user-collection.component.html',
  styleUrls: [ './user-collection.component.css' ]
})
export class UserCollectionComponent implements OnInit {
  user: User;
  error: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private bggService: BggService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.user = (this.userService.user) ? this.userService.user : this.userService.getUser(this.route);
    this.user.collection = (this.user.collection) ? this.user.collection : this.getCollection();
    this.user.plays = (this.user.plays) ? this.user.plays : this.getPlays();
  }

  getCollection(): void {
    const sortDefault = {
      sortColumn: 'collection-rank',
      sortDirection: 'asc'
    };

    this.bggService.userCollection(this.user.id, sortDefault)
      .then(collection => (collection) ? this.user.collection = collection : this.error = true);
  }

  getPlays(): void {
    this.bggService.userPlays(this.user.id)
      .then(plays => {
        if (plays) {
          this.user.plays = plays;
          this.getLastPlayed();
        } else {
          this.error = true;
        }
      });
  }

  getLastPlayed(): void {
    for (let game of this.user.collection) {
      if (game.numplays[0] !== '0') {

        for (let play of this.user.plays) {
          if (game.$.objectid === play.item[0].$.objectid) {
            game.lastPlayed = play.$.date;
            break;
          } else {
            game.lastPlayed = 'more than six months ago';
          }
        }

      }
    }
  }

  onSort($event) {
    return this.bggService.sortResponse(this.user.collection, $event);
  }
}