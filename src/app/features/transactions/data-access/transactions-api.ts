import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import {
  AddTransactionPayload,
  AddTransactionResponse,
  GetTransactionsResponse,
} from './transactions.models';
import { environment } from '../../../../environments/environment';

@Injectable()
export class TransactionsApi {
  private readonly http = inject(HttpClient);

  private readonly apiUrl = `${environment.apiUrl}/transactions`;

  public addTransaction(
    transactionPayload: AddTransactionPayload,
  ): Observable<AddTransactionResponse> {
    return this.http.post<AddTransactionResponse>(`${this.apiUrl}`, transactionPayload);
  }

  public getTransactions(): Observable<GetTransactionsResponse> {
    return this.http.get<GetTransactionsResponse>(`${this.apiUrl}`);
  }
}
