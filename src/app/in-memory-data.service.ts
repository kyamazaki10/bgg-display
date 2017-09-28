import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 0,  name: 'Zero' },
      { id: 11, name: 'Eleven' },
      { id: 12, name: 'Twelve' },
      { id: 13, name: 'Thirteen' },
      { id: 14, name: 'Fourteen' },
      { id: 15, name: 'Fifteen' },
      { id: 16, name: 'Sixteen' },
      { id: 17, name: 'Seventeen' },
      { id: 18, name: 'Eighteen' },
      { id: 19, name: 'Nineteen' },
      { id: 20, name: 'Twenty' }
    ];

    return {users};
  }
}