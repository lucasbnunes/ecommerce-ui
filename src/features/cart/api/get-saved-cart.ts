import { CartItem } from '../types/cart-item';

export function getSavedCart() {
  const cart = localStorage.getItem('cart');

  if (!cart) {
    return [];
  }

  return JSON.parse(cart) as CartItem[];
}
