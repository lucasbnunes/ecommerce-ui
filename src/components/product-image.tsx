import { cn } from '@/lib/utils';
import Image, { ImageProps } from 'next/image';

export function ProductImage({ className, src, alt, ...props }: ImageProps) {
  return (
    <div
      className={cn(
        'bg-neutral-100 rounded-lg relative flex-1 aspect-square',
        className
      )}
    >
      <Image src={src} alt={alt} fill className="object-contain" {...props} />
    </div>
  );
}
