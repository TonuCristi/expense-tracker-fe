import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Sidebar } from '../../../shared/ui/sidebar/sidebar';
import { Spinner } from '../../../shared/ui/spinner/spinner';
import { AuthStore } from '../../store/auth.store';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Sidebar, Spinner],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout implements OnInit {
  public readonly authStore = inject(AuthStore);

  ngOnInit(): void {
    this.authStore.getMe();
  }
}
