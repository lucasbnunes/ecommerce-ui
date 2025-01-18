import { CartSummary } from './components/cart-summary';

export default function CartPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Cart</h1>

      <div className="flex gap-4 items-start">
        <CartSummary />
      </div>
    </div>
  );
}
