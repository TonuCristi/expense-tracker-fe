import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Sidebar } from '../../../shared/ui/sidebar/sidebar';
import { WalletsStore } from '../../store/wallets.store';
import { Spinner } from '../../../shared/ui/spinner/spinner';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Sidebar, Spinner],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout implements OnInit {
  public readonly walletsStore = inject(WalletsStore);

  ngOnInit(): void {
    this.walletsStore.getWallets();
  }
}
