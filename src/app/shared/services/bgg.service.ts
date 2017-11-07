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

  userCollection(userId: string, sort: sortCriteria): Promise<any> {
    const url = `${this.bggUrl}/collection?username=${userId}&stats=1`;

    return this.send(url)
      .then(response => this.sortResponse(response.items.item, sort));
  }

  userPlays(userId: string): Promise<any> {
    const url = `${this.bggUrl}/plays?username=${userId}`;

    return this.send(url);
  }

  send(url: string): Promise<any> {
    let json = {};

    return this.http.get(url)
      .retryWhen(errors => errors.delay(3000).take(5))
      .toPromise()
      .then(response => {
        if (response.status === 202) {
          throw response;
        }
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

    return (this.columnName === 'game' || this.columnName === 'user-rating') ?
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

      return isAscending ?
        compareData.a - compareData.b :
        compareData.b - compareData.a;
    });
  }

  getSortData(data: any) {
    switch (this.columnName) {
      case 'game': return data['name'][0]._;
      case 'plays': return data['numplays'][0];
      case 'user-rating': return data['stats'][0].rating[0].$.value;
      case 'geek-rating': return data['stats'][0].rating[0].average[0].$.value;
      case 'own': return data['status'][0].$.own;
    }
  }

  getSortCompareData(a, b) {
    return {
      a: this.getSortData(a),
      b: this.getSortData(b)
    };
  }
}

export class sortCriteria {
  sortColumn: string;
  sortDirection: string;
}