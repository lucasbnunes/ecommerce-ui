export function formatCurrency(value: number, discountPercentage = 0) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value - value * (discountPercentage / 100));
}
