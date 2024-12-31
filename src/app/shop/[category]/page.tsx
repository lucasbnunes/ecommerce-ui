import { getProductsByCategory } from '@/features/products/api/get-products';
import { ProductsGrid } from '@/features/products/components/products-grid';

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const category = (await params).category;
  const response = await getProductsByCategory(category);

  return <ProductsGrid products={response.products} />;
}
