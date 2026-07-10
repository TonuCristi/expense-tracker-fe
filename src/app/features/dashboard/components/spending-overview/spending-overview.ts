import { Component } from '@angular/core';

const SPENDINGS = [
  {
    month: 'Feb',
    value: 20,
  },
  {
    month: 'Mar',
    value: 100,
  },
  {
    month: 'Apr',
    value: 35,
  },
  {
    month: 'May',
    value: 45,
  },
  {
    month: 'Jun',
    value: 70,
  },
  {
    month: 'Jul',
    value: 30,
  },
];

@Component({
  selector: 'app-spending-overview',
  imports: [],
  templateUrl: './spending-overview.html',
  styleUrl: './spending-overview.css',
})
export class SpendingOverview {
  public readonly spendings = SPENDINGS;
}
