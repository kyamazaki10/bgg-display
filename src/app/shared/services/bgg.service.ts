import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as xml2js from 'xml2js';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/take';
import 'rxjs/add/observable/throw';

@Injectable()
export class BggService {
  private bggUrl = 'https://www.boardgamegeek.com/xmlapi2';
  private columnName: string;
  private isAscending: boolean;

  constructor(
    private http: Http
  ) { }

  userCollection(userId: string, sort?: sortCriteria): Promise<any> {
    const url = `${this.bggUrl}/collection?username=${userId}&stats=1`;

    return this.send(url)
      .then(response => {
        if (response) {
          const collection = response.items.item;
          return (sort) ? this.sortResponse(collection, sort) : collection;
        }
      });
  }

  userPlays(userId: string, startDate?: string): Promise<any> {
    let url = `${this.bggUrl}/plays?username=${userId}`;
    url += (startDate) ? `&mindate=${startDate}` : '';

    return this.send(url)
      .then(response => {
        if (response.plays) {
          return response.plays.play;
        }
      });
  }

  send(url: string): Promise<any> {
    let json = {};

    return this.http.get(url)
      .retryWhen(errors => errors.delay(3000).take(5))
      .toPromise()
      .then(response => {
        xml2js.parseString(response.text(), function(error, result) {
          json = result;
        });
        return json;
      })
      .catch(error => console.log(error));
  }

  sortResponse(data: any, sort: sortCriteria) {
    this.columnName = sort.sortColumn;
    this.isAscending = sort.sortDirection === 'asc';

    return (this.isTextColumn(this.columnName)) ?
      this.sortTextResponse(data, this.isAscending) :
      this.sortNumberResponse(data, this.isAscending);
  }

  sortTextResponse(data: any, isAscending: boolean) {
    return data.sort((a, b) => {
      let compareData = this.getSortCompareData(a, b);

      if (compareData.a < compareData.b) {
        return isAscending ? -1 : 1;
      }
      if (compareData.a > compareData.b) {
        return isAscending ? 1 : -1;
      }
      return 0;
    });
  }

  sortNumberResponse(data: any, isAscending: boolean) {
    return data.sort((a, b) => {
      let compareData = this.getSortCompareData(a, b);

      if (isNaN(compareData.a)) return 1;
      if (isNaN(compareData.b)) return -1;

      return isAscending ?
        compareData.a - compareData.b :
        compareData.b - compareData.a;
    });
  }

  getSortData(data: any) {
    let value: any;

    if (this.columnName.startsWith('collection')) {
      value = {
        'collection-game': data['name'][0]._,
        'collection-plays': data['numplays'][0],
        'collection-user-rating': data['stats'][0].rating[0].$.value,
        'collection-geek-rating': data['stats'][0].rating[0].average[0].$.value,
        'collection-rank': data['stats'][0].rating[0].ranks[0].rank[0].$.value,
        'collection-own': data['status'][0].$.own,
        'collection-year': data['yearpublished'][0]
      };
    } else {
      value = {
        'plays-game': data['item'][0].$.name,
        'plays-date': data.$.date,
        'plays-quantity': data.$.quantity
      };
    }

    return value[this.columnName];
  }

  getSortCompareData(a, b) {
    return {
      a: this.getSortData(a),
      b: this.getSortData(b)
    };
  }

  isTextColumn(column: string) {
    const textColumns = [ 'collection-game', 'collection-user-rating', 'plays-game', 'plays-date'];
    return textColumns.includes(column);
  }
}

export class sortCriteria {
  sortColumn: string;
  sortDirection: string;
}