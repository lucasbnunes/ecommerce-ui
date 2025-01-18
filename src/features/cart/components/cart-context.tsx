'use client';

import React, { PropsWithChildren, useEffect } from 'react';
import { getSavedCart } from '../api/get-saved-cart';
import { saveCart } from '../api/save-cart';
import { CartItem } from '../types/cart-item';

export interface CartContextValues {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalAmount: number;
}

export const CartContext = React.createContext({});

export function CartContextProvider({ children }: PropsWithChildren) {
  const [cart, setCart] = React.useState<CartItem[]>([]);

  useEffect(() => {
    setCart(getSavedCart());
  }, []);

  useEffect(() => {
    saveCart(cart);
  }, [cart]);

  const addToCart = (item: CartItem) => {
    if (item.quantity < 1) return;

    const existingItem = cart.find((i) => i.id === item.id);

    if (existingItem) {
      updateQuantity(item.id, existingItem.quantity + item.quantity);
    } else {
      setCart([
        ...cart,
        {
          id: item.id,
          title: item.title,
          price: item.price,
          quantity: item.quantity,
          thumbnail: item.thumbnail,
        },
      ]);
    }
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((i) => i.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }

    setCart(cart.map((i) => (i.id === id ? { ...i, quantity } : i)));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const values: CartContextValues = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalAmount,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
}
