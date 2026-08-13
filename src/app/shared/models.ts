import { CURRENCY_OPTIONS } from './constants';

export type Currency = (typeof CURRENCY_OPTIONS)[number]['value'];
