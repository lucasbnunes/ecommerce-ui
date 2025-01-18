'use client';

import { Separator } from '@/components/ui/separator';
import { useCartContext } from '@/features/cart/hooks/use-cart-context';
import { formatCurrency } from '@/utils/format';

export function CartSummary() {
  const { totalAmount } = useCartContext();
  const discount = 0;

  return (
    <div className="w-full md:max-w-[420px] p-6 border rounded-lg">
      <div>
        <div className="flex justify-between items-center">
          <span className="font-medium text-muted-foreground">Subtotal</span>
          <span className="font-medium">{formatCurrency(totalAmount)}</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="font-medium text-muted-foreground">Discount</span>
          <span className={'font-medium text-muted-foreground'}>
            {formatCurrency(discount)}
          </span>
        </div>
      </div>

      <Separator className="my-3" />

      <div className="flex justify-between items-center text-lg">
        <span className="font-medium text-muted-foreground">Total</span>
        <span className="font-medium ">
          {formatCurrency(totalAmount - discount)}
        </span>
      </div>
    </div>
  );
}
