'use client';

import { NumberInput } from '@/components/number-input';
import { Button } from '@/components/ui/button';
import React from 'react';
import { useCartContext } from '../hooks/use-cart-context';
import { CartItem } from '../types/cart-item';
import { useToast } from '@/hooks/use-toast';

interface AddToCartButtonProps {
  product: Omit<CartItem, 'quantity'>;
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCartContext();
  const [quantity, setQuantity] = React.useState(1);
  const { toast } = useToast();

  function handleClick() {
    addToCart({ ...product, quantity });
    toast({
      title: 'Added to cart',
    });
  }

  return (
    <div className="flex flex-col items-start">
      <div className="self-start">
        <NumberInput value={quantity} onValueChange={setQuantity} />
      </div>
      <Button onClick={handleClick} className="mt-2 w-full">
        Add to cart
      </Button>
    </div>
  );
}
