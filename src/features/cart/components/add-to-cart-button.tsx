'use client';

import { NumberInput } from '@/components/number-input';
import { Button } from '@/components/ui/button';
import React, { useEffect } from 'react';
import { useCartContext } from '../hooks/use-cart-context';
import { CartItem } from '../types/cart-item';
import { useToast } from '@/hooks/use-toast';

interface AddToCartButtonProps {
  product: Omit<CartItem, 'quantity'>;
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const { cart, addToCart, isLoading, updateQuantity } = useCartContext();
  const [quantity, setQuantity] = React.useState(1);
  const { toast } = useToast();
  const existingItem = React.useRef<null | CartItem>(null);

  useEffect(() => {
    if (!isLoading) {
      const item = cart.find((item) => item.id === product.id);
      if (!item) return;

      existingItem.current = item;
      setQuantity(item.quantity);
    }
  }, [isLoading, setQuantity, cart, product]);

  function handleClick() {
    if (existingItem.current) {
      handleUpdateQuantity();
    } else {
      handleAddToCart();
    }
  }

  function handleAddToCart() {
    addToCart({ ...product, quantity });
    toast({
      title: 'Added to cart',
    });
  }

  function handleUpdateQuantity() {
    if (existingItem.current) {
      updateQuantity(existingItem.current.id, quantity);
      toast({
        title: 'Cart updated',
      });
    }
  }

  return (
    <div className="flex flex-col items-start">
      <div className="self-start">
        <NumberInput
          value={quantity}
          onChange={(newValue) => setQuantity(newValue)}
          min={1}
        />
      </div>
      <Button onClick={handleClick} className="mt-2 w-full">
        Add to cart
      </Button>
    </div>
  );
}
