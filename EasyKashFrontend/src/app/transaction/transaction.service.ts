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
    let searchParams = new HttpParams();
    searchParams = searchParams.append('seller_id', '1');
    searchParams = searchParams.append('page', '0');
    searchParams = searchParams.append('per_page', '6');
    return this.http
      .get('http://localhost:3000/transactions', {
        params: searchParams,
        responseType: 'json',
      })
      .pipe(
        map((responseData) => {
          const transactionArray: Transaction[] = [];

          for (const key in responseData['transactions']) {
            transactionArray.push({
              ...responseData['transactions'][key],
            });
          }

          return transactionArray;
        })
      );
  }
}
