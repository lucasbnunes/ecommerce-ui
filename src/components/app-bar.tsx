import { CartLink } from './cart-link';

export function AppBar() {
  return (
    <div className="w-full flex justify-between items-center gap-2 pt-6 md:px-6 pb-3">
      <h1 className="text-2xl font-bold uppercase">Buy.It</h1>

      <div className="flex items-center gap-8">
        <CartLink />
      </div>
    </div>
  );
}
