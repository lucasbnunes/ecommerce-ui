import { Product } from '@/types/api';
import { Stars } from './stars';
import { formatDateAsString } from '@/utils/format';

interface ReviewProps {
  review: Product['reviews'][0];
}

function getFirstName(name: string) {
  return name.split(' ')[0];
}

export function Review({ review }: ReviewProps) {
  return (
    <div
      key={review.date + review.reviewerName}
      className="border-b border-gray-300 py-8"
    >
      <span className="font-bold">{getFirstName(review.reviewerName)}</span>
      <span className="text-sm text-gray-600 ml-4">
        {formatDateAsString(review.date)}
      </span>

      <div className="mt-2 mb-3">
        <Stars rating={review.rating} size="small" />
      </div>

      <p>{review.comment}</p>
    </div>
  );
}
