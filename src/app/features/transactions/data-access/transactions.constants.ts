export const TRANSACTION_TYPE_OPTIONS = [
  { label: 'Expense', value: 'expense' },
  { label: 'Income', value: 'income' },
] as const;

export const TRANSACTION_CATEGORY_OPTIONS = [
  { label: 'Groceries', value: 'groceries' },
  { label: 'Transport', value: 'transport' },
  { label: 'Shopping', value: 'shopping' },
  { label: 'Subscriptions', value: 'subscriptions' },
  { label: 'Salary', value: 'salary' },
  { label: 'Freelance', value: 'freelance' },
  { label: 'Transfer', value: 'transfer' },
  { label: 'Other', value: 'other' },
] as const;
