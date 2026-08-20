import { Component, signal } from '@angular/core';

import { Button } from '../../../../shared/ui/button/button';
import { AddTransactionForm } from '../add-transaction-form/add-transaction-form';

@Component({
  selector: 'app-add-transaction-button',
  imports: [Button, AddTransactionForm],
  templateUrl: './add-transaction-button.html',
  styleUrl: './add-transaction-button.css',
})
export class AddTransactionButton {
  public readonly isFormOpen = signal<boolean>(false);

  public openForm() {
    this.isFormOpen.set(true);
  }
}
