import { CartSummary } from './components/cart-summary';
import { CartList } from './components/cart-list';

export default function CartPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Cart</h1>

      <div className="flex flex-wrap gap-4 items-start">
        <CartList />
        <CartSummary />
      </div>
    </div>
  );
}
