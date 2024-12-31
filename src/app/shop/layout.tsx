import { AppBar } from '@/components/app-bar';
import { AppNavigation } from '@/components/navigation';

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <header>
      <AppBar />
      <div className="flex justify-center">
        <AppNavigation />
      </div>

      <main className="mt-8">{children}</main>
    </header>
  );
}
