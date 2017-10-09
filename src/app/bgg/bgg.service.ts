import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as xml2js from 'xml2js';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class BggService {
  bggUrl = 'https://www.boardgamegeek.com/xmlapi2';

  constructor(
    private http: Http
  ) { }

  userCollection(user: string): Promise<any> {
    const url = `${this.bggUrl}/collection?username=${user}`;
    let json = {};

    return this.http.get(url)
      .toPromise()
      .then(response => {
        xml2js.parseString(response.text(), function(error, result) {
          json = result.items;
        });
        return json;
      })
      .catch(error => {
        console.log(error);
      });
  }
}