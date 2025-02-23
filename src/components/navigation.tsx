'use client';

import Link from 'next/link';

import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import React from 'react';

type Category = {
  [key: string]: { title: string; href: string }[];
};

const categories: Category = {
  Men: [
    {
      title: 'Shirts',
      href: '/shop/mens-shirts',
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
      href: '/shop/womens-jewellery',
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
            <CustomPopover category={category} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

function CustomPopover({ category }: { category: string }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <Trigger>{category}</Trigger>

      <Content items={categories[category]} onClick={() => setIsOpen(false)} />
    </Popover>
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

function Content({
  items,
  onClick,
}: {
  items: { title: string; href: string }[];
  onClick: () => void;
}) {
  return (
    <PopoverContent collisionPadding={16}>
      <ul>
        {items.map((item) => (
          <li key={item.title}>
            <Button
              asChild
              variant="ghost"
              className="w-full justify-start"
              onClick={onClick}
            >
              <Link href={item.href}>{item.title}</Link>
            </Button>
          </li>
        ))}
      </ul>
    </PopoverContent>
  );
}
