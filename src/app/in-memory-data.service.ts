//In-memory API
import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let  invoices = [
      {
        id: 1,client: 'Oksana Krasikova',clientGroup: 'premium',parkingTime: 7,dueDate: '10/01/2017',
        grandTotal: 245,
        isPaid: false
      },
      {
        id: 2,client: 'Michael Buns',clientGroup: 'premium',parkingTime: 2,dueDate: '12/02/2017',
        grandTotal: 45,
        isPaid: false
      },
      {
        id: 3,client: 'Danny Grey',clientGroup: 'regular',parkingTime: 2,dueDate: '13/02/2017',
        grandTotal: 48,
        isPaid: false
      },
      {
        id: 4,client: 'Helen Bright',clientGroup: 'premium',parkingTime: 5,dueDate: '14/02/2017',
        grandTotal: 200,
        isPaid: false
      },
      {
        id: 5,client: 'Henry Vasel',clientGroup: 'premium',parkingTime: 4,dueDate: '15/02/2017',
        grandTotal: 120,
        isPaid: false
      }
    ];
    return {invoices};
  }
}
