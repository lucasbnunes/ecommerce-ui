import { StarIcon } from 'lucide-react';

interface RatingProps {
  rating: number;
  reviewsCount: number;
}

export function Rating({ rating, reviewsCount }: RatingProps) {
  return (
    <div className="flex items-center gap-0.5">
      <StarIcon size={14} className="text-yellow-500 fill-yellow-500" />
      <span className="font-medium">{rating}</span>
      <span>({reviewsCount})</span>
    </div>
  );
}
