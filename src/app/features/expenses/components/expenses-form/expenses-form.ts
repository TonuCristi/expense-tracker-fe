import { Component, inject } from '@angular/core';
import { FormArray, NonNullableFormBuilder, Validators } from '@angular/forms';
import { EXPENSE_CATEGORIES } from '../../constants/expense.constants';
import { ExpenseCategory, ExpenseForm } from '../../models/expense.model';

@Component({
  selector: 'app-expenses-form',
  imports: [],
  templateUrl: './expenses-form.html',
  styleUrl: './expenses-form.css',
})
export class ExpensesForm {
  private readonly categories = EXPENSE_CATEGORIES;

  private fb = inject(NonNullableFormBuilder);

  public expensesForm = this.fb.group({
    expenses: this.fb.array([this.createExpense()]),
  });

  public get expenses() {
    return this.expensesForm.get('expenses') as FormArray;
  }

  private createExpense(): ExpenseForm {
    return this.fb.group({
      amount: [0, Validators.required],
      category: [this.categories[0] as ExpenseCategory, Validators.required],
      date: [new Date().toUTCString().split('T')[0], Validators.required],
      note: [''],
    });
  }
}
