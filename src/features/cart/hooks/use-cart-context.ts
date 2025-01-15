import React from 'react';
import { CartContext, CartContextValues } from '../components/cart-context';

export const useCartContext = () => {
  return React.useContext(CartContext) as CartContextValues;
};
