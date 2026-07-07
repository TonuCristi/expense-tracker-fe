import { Component, computed, input, output } from '@angular/core';

const VARIANT_STYLES: Record<Variant, string> = {
  primary:
    'p-2 bg-primary-foreground hover:bg-inverse-hover active:inverse-active disabled:bg-inverse-disabled rounded-md text-primary',
  secondary:
    'p-2 bg-primary hover:bg-primary-hover active:bg-primary-active disabled:bg-primary-disabled rounded-md text-primary-foreground',
  empty: '',
};

type Variant = 'primary' | 'secondary' | 'empty';

type Type = 'button' | 'submit' | 'reset';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  public readonly type = input<Type>('button');
  public readonly disabled = input<boolean>(false);

  public readonly variant = input<Variant>('primary');
  public readonly fullWidth = input<boolean>(false);

  public readonly clicked = output();

  public readonly styles = computed(() => {
    const width = this.fullWidth() ? 'w-full' : 'w-auto';

    return `cursor-pointer transition-all disabled:cursor-not-allowed font-semibold ${VARIANT_STYLES[this.variant()]} ${width}`;
  });
}
