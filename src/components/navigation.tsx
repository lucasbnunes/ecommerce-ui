'use client';

import Link from 'next/link';

import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

type Category = {
  [key: string]: { title: string; href: string }[];
};

const categories: Category = {
  Men: [
    {
      title: 'Shirts',
      href: '/shop/Mens-shirts',
    },
    {
      title: 'Shoes',
      href: '/shop/mens-shoes',
    },
    {
      title: 'Watches',
      href: '/shop/mens-watches',
    },
  ],
  Women: [
    {
      title: 'Bags',
      href: '/shop/womens-bags',
    },
    {
      title: 'Dresses',
      href: '/shop/womens-dresses',
    },
    {
      title: 'Jewelry',
      href: '/shop/womens-jewelry',
    },
    {
      title: 'Shoes',
      href: '/shop/womens-shoes',
    },
    {
      title: 'Watches',
      href: '/shop/womens-watches',
    },
  ],
};

export function AppNavigation() {
  return (
    <nav>
      <ul className="flex gap-4">
        {Object.keys(categories).map((category) => (
          <li key={category}>
            <Popover>
              <Trigger>{category}</Trigger>

              <Content items={categories[category]} />
            </Popover>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Trigger({ children }: { children: string }) {
  return (
    <PopoverTrigger asChild className="group">
      <Button variant="ghost">
        {children}{' '}
        <ChevronDown
          className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
          aria-hidden="true"
        />
      </Button>
    </PopoverTrigger>
  );
}

function Content({ items }: { items: { title: string; href: string }[] }) {
  return (
    <PopoverContent collisionPadding={16}>
      <ul>
        {items.map((item) => (
          <li key={item.title}>
            <Button asChild variant="ghost" className="w-full justify-start">
              <Link href={item.href}>{item.title}</Link>
            </Button>
          </li>
        ))}
      </ul>
    </PopoverContent>
  );
}
