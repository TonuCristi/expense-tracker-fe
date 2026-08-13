import { Component, input, output } from '@angular/core';

import { Overlay } from '../overlay/overlay';
import { Button } from '../button/button';

@Component({
  selector: 'app-confirmation-modal',
  imports: [Overlay, Button],
  templateUrl: './confirmation-modal.html',
  styleUrl: './confirmation-modal.css',
})
export class ConfirmationModal {
  public readonly title = input.required<string>();
  public readonly prompt = input.required<string>();
  public readonly confirmText = input.required<string>();
  public readonly cancelText = input.required<string>();
  public readonly isLoading = input<boolean>(false);

  public readonly confirmed = output();
  public readonly cancelled = output();

  public confirm() {
    this.confirmed.emit();
  }

  public cancel() {
    this.cancelled.emit();
  }
}
