import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import {
  AddWalletPayload,
  AddWalletResponse,
  EditWalletPayload,
  GetWalletsResponse,
  MessageResponse,
} from './wallet.models';
import { environment } from '../../../../environments/environment';

@Injectable()
export class WalletsApi {
  private readonly http = inject(HttpClient);

  private readonly apiUrl = `${environment.apiUrl}/wallets`;

  public addWallet(walletPayload: AddWalletPayload): Observable<AddWalletResponse> {
    return this.http.post<AddWalletResponse>(this.apiUrl, walletPayload);
  }

  public editWallet(
    walletId: string,
    walletPayload: EditWalletPayload,
  ): Observable<MessageResponse> {
    return this.http.put<MessageResponse>(`${this.apiUrl}/${walletId}`, walletPayload);
  }

  public deleteWallet(walletId: string): Observable<MessageResponse> {
    return this.http.delete<MessageResponse>(`${this.apiUrl}/${walletId}`);
  }

  public getWallets(): Observable<GetWalletsResponse> {
    return this.http.get<GetWalletsResponse>(this.apiUrl);
  }
}
