import { Component } from '@angular/core';

@Component({
  selector: 'app-last-transactions-list',
  imports: [],
  templateUrl: './last-transactions-list.html',
  styleUrl: './last-transactions-list.css',
})
export class LastTransactionsList {
  public readonly transactions = [
    {
      title: 'Expense',
      amount: 45,
      category: 'Food',
      date: '2026-06-01',
      icon: 'pi-arrow-left',
    },
    {
      title: 'Income',
      amount: 1200,
      category: 'Salary',
      date: '2026-06-02',
      icon: 'pi-arrow-right',
    },
    {
      title: 'Transfer',
      amount: 300,
      category: 'Savings',
      date: '2026-06-03',
      icon: 'pi-arrow-right-arrow-left',
    },
    {
      title: 'Expense',
      amount: 25,
      category: 'Transport',
      date: '2026-06-04',
      icon: 'pi-arrow-left',
    },
    {
      title: 'Expense',
      amount: 80,
      category: 'Entertainment',
      date: '2026-06-05',
      icon: 'pi-arrow-left',
    },
    {
      title: 'Income',
      amount: 200,
      category: 'Freelance',
      date: '2026-06-06',
      icon: 'pi-arrow-right',
    },
    {
      title: 'Expense',
      amount: 60,
      category: 'Utilities',
      date: '2026-06-07',
      icon: 'pi-arrow-left',
    },
    {
      title: 'Transfer',
      amount: 150,
      category: 'Investment',
      date: '2026-06-08',
      icon: 'pi-arrow-right-arrow-left',
    },
    {
      title: 'Expense',
      amount: 30,
      category: 'Food',
      date: '2026-06-09',
      icon: 'pi-arrow-left',
    },
    {
      title: 'Income',
      amount: 500,
      category: 'Bonus',
      date: '2026-06-10',
      icon: 'pi-arrow-right',
    },
  ];

  public getTransactionColor(title: string) {
    if (title === 'Expense') {
      return 'text-red-500';
    }

    if (title === 'Income') {
      return 'text-green-500';
    }

    return 'text-zinc-100';
  }
}
