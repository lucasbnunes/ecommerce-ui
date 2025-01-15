import { CartItem } from '../types/cart-item';

export function saveCart(cart: CartItem[]) {
  localStorage.setItem('cart', JSON.stringify(cart));
}
