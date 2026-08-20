import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials',
})
export class InitialsPipe implements PipeTransform {
  public transform(value: string | null | undefined, length: number = 1): string {
    if (!value) return '';

    if (length < 1) return '';

    return value
      .trim()
      .split(' ')
      .slice(0, Math.min(length, 2))
      .map((word) => word[0])
      .join('')
      .toUpperCase();
  }
}
