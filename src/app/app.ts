import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Spinner } from './shared/ui/spinner/spinner';
import { AuthStore } from './core/store/auth.store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Spinner],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  public readonly authStore = inject(AuthStore);

  ngOnInit(): void {
    this.authStore.getMe();
  }
}
