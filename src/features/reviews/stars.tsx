import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { StarIcon } from 'lucide-react';

interface StarsProps {
  rating: number;
  size?: 'small' | 'default';
}

const starVariants = cva('', {
  variants: {
    size: {
      small: 'w-4 h-4',
      default: 'w-6 h-6',
    },
    filled: {
      true: 'text-yellow-500 fill-yellow-500',
      false: 'text-gray-300',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

export function Stars({ rating, size = 'default' }: StarsProps) {
  function renderStars() {
    const stars = [];

    for (let i = 1; i < 6; i++) {
      const filled = rating >= i;

      stars.push(
        <StarIcon className={cn(starVariants({ size, filled }))} key={i} />
      );
    }

    return stars;
  }

  return (
    <div className="flex gap-1">
      <span className="sr-only">{`Rating: ${rating} out of 5 stars`}</span>
      {renderStars()}
    </div>
  );
}
