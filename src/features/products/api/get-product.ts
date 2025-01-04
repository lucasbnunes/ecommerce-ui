import { api } from '@/lib/api-client';
import { Product } from '@/types/api';

export async function getProductById(id: Product['id']) {
  return await api.get(`products/${id}`).json<Product>();
}
