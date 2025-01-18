'use client';

import { NumberInput } from '@/components/number-input';
import { ProductImage } from '@/components/product-image';
import { useCartContext } from '@/features/cart/hooks/use-cart-context';
import { formatCurrency } from '@/utils/format';

export function CartList() {
  const { cart, updateQuantity } = useCartContext();

  return (
    <div className="flex-1 flex flex-col gap-4">
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center p-2 md:pr-10 rounded-lg hover:bg-muted/50"
        >
          <div className="flex gap-4">
            <ProductImage
              className="h-20 w-20 md:h-24 md:w-24 max-w-24"
              src={item.thumbnail}
              alt={item.title}
            />

            <div className="flex flex-col gap-2">
              <h4 className="font-medium text-muted-foreground mt-1">
                {item.title}
              </h4>

              <span>{formatCurrency(item.price)}</span>
            </div>
          </div>

          <NumberInput
            defaultValue={item.quantity}
            onValueChange={(v) => updateQuantity(item.id, v)}
          />
        </div>
      ))}
    </div>
  );
}
