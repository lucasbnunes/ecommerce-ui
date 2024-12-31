export interface ProductsApiResponse<T> {
  limit: number;
  skip: number;
  total: number;
  products: T[];
}

export type Category =
  | 'mens-shirts'
  | 'mens-shoes'
  | 'mens-watches'
  | 'womens-bags'
  | 'womens-dresses'
  | 'womens-jewelery'
  | 'womens-shoes'
  | 'womens-watches';

export interface Product {
  id: number;
  title: string;
  description: string;
  category: Category;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
  }[];
  returnPolicy: string;
  images: string[];
  thumbnail: string;
}
