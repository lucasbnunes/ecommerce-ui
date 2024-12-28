import { CartLink } from './cart-link';

export function AppBar() {
  return (
    <div className="w-full flex justify-between items-center gap-2 p-6 pb-1">
      <h1 className="text-2xl font-bold uppercase">Buy.It</h1>

      <div className="flex items-center gap-8">
        <CartLink />
      </div>
    </div>
  );
}
