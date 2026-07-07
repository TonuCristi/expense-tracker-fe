import { Component, computed, input, model } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';

type Variant = 'primary';

const VARIANT_STYLES: Record<Variant, string> = {
  primary: 'rounded-md p-2 border border-border',
};

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class Input implements FormValueControl<string> {
  public readonly value = model('');

  public readonly id = input<string>('');
  public readonly name = input<string>('');
  public readonly type = input<string>('');
  public readonly disabled = input<boolean>(false);
  public readonly placeholder = input<string>('');

  public readonly variant = input<Variant>('primary');
  public readonly fullWidth = input<boolean>(false);

  public readonly styles = computed(() => {
    const width = this.fullWidth() ? 'w-full' : 'w-auto';

    return `cursor-pointer transition-all disabled:cursor-not-allowed font-semibold ${VARIANT_STYLES[this.variant()]} ${width}`;
  });
}
