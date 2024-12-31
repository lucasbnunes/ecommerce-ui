import { ProductImage } from '@/components/product-image';
import { cn } from '@/lib/utils';
import { Product } from '@/types/api';
import { formatCurrency } from '@/utils/format';
import Link from 'next/link';
import { Rating } from './rating';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const hasDiscount = product.discountPercentage > 0;

  return (
    <Link
      href={`/shop/product/${product.id}`}
      className="inline-block w-[248px] h-[328px] "
    >
      <div className="max-w-full group flex flex-col">
        <ProductImage src={product.images[0]} alt={product.title} />

        <div className="mt-2">
          <div className="flex gap-2 text-sm text-zinc-700 ">
            <h4 className="font-medium">{product.brand}</h4>
            <Rating
              rating={product.rating}
              reviewsCount={product.reviews.length}
            />
          </div>

          <h3 className="font-medium text-lg truncate">{product.title}</h3>

          <div className="flex items-center gap-2 mt-1">
            <span className={cn('font-bold', hasDiscount && 'text-red-600')}>
              {formatCurrency(product.price, product.discountPercentage)}
            </span>

            {hasDiscount && (
              <span className="text-zinc-700 line-through">
                {formatCurrency(product.price)}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
