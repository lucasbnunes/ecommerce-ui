'use client';

import { ProductImage } from '@/components/product-image';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface ImageGalleryProps {
  images: string[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col gap-2">
      <ProductImage
        src={selectedImage}
        alt="Product image"
        className="w-full"
      />

      <div className="flex gap-2">
        {images.map((image) => (
          <button
            key={image}
            onClick={() => setSelectedImage(image)}
            className={cn(
              'border-2 border-transparent hover:border-gray-300 focus:border-gray-400 outline-none rounded-lg',
              selectedImage === image ? 'border-gray-400' : ''
            )}
          >
            <ProductImage
              src={image}
              alt="Product image"
              className="w-16 h-16"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
