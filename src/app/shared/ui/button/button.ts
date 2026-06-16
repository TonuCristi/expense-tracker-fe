import { Component, computed, input, output } from '@angular/core';

type Variant = 'primary' | 'secondary' | 'empty';

type Type = 'button' | 'submit' | 'reset';

const VARIANT_STYLES: Record<Variant, string> = {
  primary:
    'py-1 px-2 bg-zinc-100 hover:bg-zinc-300 active:bg-zinc-300 disabled:bg-zinc-300 rounded-md text-zinc-900',
  secondary:
    'py-1 px-2 bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-800 disabled:bg-zinc-800 rounded-md text-zinc-100',
  empty: '',
};

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  public variant = input<Variant>('primary');
  public type = input<Type>('button');
  public disabled = input<boolean>(false);
  public fullWidth = input<boolean>(false);

  public clicked = output();

  public styles = computed(() => {
    const width = this.fullWidth() ? 'w-full' : 'w-auto';

    return `cursor-pointer transition-all disabled:cursor-not-allowed font-semibold ${VARIANT_STYLES[this.variant()]} ${width}`;
  });
}
