import { CURRENCY_OPTIONS } from '../constants';
import { Currency } from '../models';

export function getInitials(value?: string | null): string {
  return (value ?? '')
    .split(' ')
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
}

export function getCurrencyLabel(currency: Currency) {
  return CURRENCY_OPTIONS.find((currencyOption) => currencyOption.value === currency)?.label ?? '';
}
