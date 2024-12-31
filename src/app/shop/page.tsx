import { getProductsByCategory } from '@/features/products/api/get-products';
import { ProductsGrid } from '@/features/products/products-grid';

export default async function ShopPage() {
  const response = await getProductsByCategory('mens-shoes');

  return <ProductsGrid products={response.products} />;
}
