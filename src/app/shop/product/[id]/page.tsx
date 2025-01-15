import { AddToCartButton } from '@/features/cart/components/add-to-cart-button';
import { getProductById } from '@/features/products/api/get-product';
import { Rating } from '@/features/products/components/rating';
import { Review } from '@/features/reviews/review';
import { Stars } from '@/features/reviews/stars';
import { cn } from '@/lib/utils';
import { formatCurrency } from '@/utils/format';
import { TruckIcon, UndoDotIcon } from 'lucide-react';
import { ImageGallery } from '../_components/image-gallery';

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const product = await getProductById(parseInt(id));
  const hasDiscount = product.discountPercentage > 0;

  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-9 md:gap-20">
        <div className="flex-1 max-w-screen-sm">
          <ImageGallery images={product.images} />
        </div>

        <div className="flex-1 flex flex-col">
          <div className="w-full flex justify-between">
            <h4 className="font-medium text-sm text-zinc-700">
              {product.brand}
            </h4>
          </div>

          <h1 className="text-2xl font-semibold my-3">{product.title}</h1>

          <div className="text-2xl flex items-center gap-2">
            <span className={cn('font-bold', hasDiscount && 'text-red-600')}>
              {formatCurrency(product.price, product.discountPercentage)}
            </span>

            {hasDiscount && (
              <span className="text-zinc-700 line-through">
                {formatCurrency(product.price)}
              </span>
            )}
          </div>

          <p className="inline-block my-4">{product.description}</p>
          <Rating
            rating={product.rating}
            reviewsCount={product.reviews.length}
          />

          <div className="mt-8">
            <AddToCartButton product={product} />
          </div>

          <div className="flex gap-3 border border-gray-300 rounded-lg p-4 mt-16">
            <TruckIcon className="text-gray-600" />

            <div>
              <h4 className="font-medium text-gray-600">
                Shipping information
              </h4>
              <p className="text-gray-800">{product.shippingInformation}</p>
            </div>
          </div>

          <div className="flex gap-3 border border-gray-300 rounded-lg p-4 mt-2">
            <UndoDotIcon className="text-gray-600" />

            <div>
              <h4 className="font-medium text-gray-600">Return policy</h4>
              <p className="text-gray-800">{product.returnPolicy}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h4 id="#reviews" className="text-2xl font-medium mb-">
          Reviews
        </h4>

        <div className="flex items-center gap-2 mt-4">
          <span className="text-2xl font-medium">{product.rating}</span>
          <Stars rating={product.rating} />
        </div>

        <div>
          {product.reviews.map((review) => (
            <Review review={review} key={review.reviewerName + review.date} />
          ))}
        </div>
      </div>
    </>
  );
}
