import { CURRENCY_OPTIONS } from '../constants';
import { Currency } from '../models';

export function getCurrencyLabel(currency: Currency) {
  return CURRENCY_OPTIONS.find((currencyOption) => currencyOption.value === currency)?.label ?? '';
}
