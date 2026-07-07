export function getInitials(value?: string | null): string {
  return (value ?? '')
    .split(' ')
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
}
