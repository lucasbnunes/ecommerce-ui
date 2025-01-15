'use client';
import { useCartContext } from '@/features/cart/hooks/use-cart-context';
import { ShoppingBagIcon } from 'lucide-react';
import Link from 'next/link';

export function CartLink() {
  const { cart } = useCartContext();

  return (
    <Link className="relative" href="/cart">
      <ShoppingBagIcon />
      <span className="absolute -top-3 -right-3 bg-primary rounded-full flex items-center justify-center min-w-6 h-6 font-bold">
        {cart.length}
      </span>
    </Link>
  );
}
