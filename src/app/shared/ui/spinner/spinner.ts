import { Component, computed, input } from '@angular/core';

const VARIANT_STYLES: Record<Variant, string> = {
  lg: 'w-14 h-14 border-8',
  md: 'w-10 h-10 border-6',
  sm: 'w-6 h-6 border-4',
};

type Variant = 'lg' | 'md' | 'sm';

@Component({
  selector: 'app-spinner',
  imports: [],
  templateUrl: './spinner.html',
  styleUrl: './spinner.css',
})
export class Spinner {
  public readonly variant = input<Variant>('lg');

  public readonly styles = computed(() => {
    return `rounded-full border-solid border-zinc-800 border-r-zinc-300 animate-spin ${VARIANT_STYLES[this.variant()]}`;
  });
}
