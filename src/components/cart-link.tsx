import { ShoppingBagIcon } from 'lucide-react';
import Link from 'next/link';

export function CartLink() {
  // TODO: Implement cart count

  return (
    <Link className="relative" href="/cart">
      <ShoppingBagIcon />
      <span className="absolute -top-3 -right-3 bg-primary rounded-full flex items-center justify-center min-w-6 h-6 font-bold">
        0
      </span>
    </Link>
  );
}
