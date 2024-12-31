import { api } from '@/lib/api-client';
import { Product, ProductsApiResponse } from '@/types/api';

export async function getProductsByCategory(category: string) {
  return await api
    .get(`products/category/${category}`)
    .json<ProductsApiResponse<Product>>();
}
