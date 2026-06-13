import { FormControl, FormGroup } from '@angular/forms';
import { EXPENSE_CATEGORIES } from '../constants/expense.constants';

export type ExpenseCategory = (typeof EXPENSE_CATEGORIES)[number];

export interface Expense {
  id: string;
  amount: number;
  category: ExpenseCategory;
  date: string;
  note: string;
}

export type ExpenseForm = FormGroup<{ [K in keyof Omit<Expense, 'id'>]: FormControl<Expense[K]> }>;
