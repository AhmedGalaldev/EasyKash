import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Transaction } from './transaction.model';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor(private http: HttpClient) {}

  fetchTransactions() {
    return this.http
      .get('http://localhost:3000/transactions', {
        params: new HttpParams().set('seller_id', '1'),
        responseType: 'json',
      })
      .pipe(
        map((responseData) => {
          const transactionArray: Transaction[] = [];
          for (const key in responseData) {
            transactionArray.push({
              ...responseData[key],
              id: key,
            });
          }
          return transactionArray;
        })
      );
  }
}
