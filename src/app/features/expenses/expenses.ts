import { Component } from '@angular/core';
import { ExpensesForm } from './components/expenses-form/expenses-form';
import { ExpensesSummary } from './components/expenses-summary/expenses-summary';

@Component({
  selector: 'app-expenses',
  imports: [ExpensesForm, ExpensesSummary],
  templateUrl: './expenses.html',
  styleUrl: './expenses.css',
})
export class Expenses {}
