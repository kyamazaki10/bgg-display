import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class BggService {
  private bggUrl = 'https://www.boardgamegeek.com/xmlapi2';

  constructor(
    private http: Http
  ) { }

  search(user: string): Promise<any> {
    const url = `${this.bggUrl}/collection?username=${user}`;

    return this.http.get(url)
      .toPromise()
      .then(() => null)
      .catch(error => {
        console.log(error);
      });
  }
}