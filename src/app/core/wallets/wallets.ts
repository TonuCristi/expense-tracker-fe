import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { AddWalletPayload, AddWalletResponse, GetWalletsResponse } from './wallet.models';
import { environment } from '../../../environments/environment';

@Injectable()
export class Wallets {
  private readonly http = inject(HttpClient);

  private readonly apiUrl = `${environment.apiUrl}/wallets`;

  public addWallet(walletPayload: AddWalletPayload): Observable<AddWalletResponse> {
    return this.http.post<AddWalletResponse>(`${this.apiUrl}`, walletPayload);
  }

  public getWallets(): Observable<GetWalletsResponse> {
    return this.http.get<GetWalletsResponse>(this.apiUrl);
  }
}
