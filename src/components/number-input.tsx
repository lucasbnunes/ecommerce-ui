'use client';

import { cn } from '@/lib/utils';
import { MinusIcon, PlusIcon } from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface NumberInputProps
  extends Omit<React.ComponentProps<'input'>, 'onChange'> {
  value: number;
  onChange: (newValue: number) => void;
  min?: number;
  max?: number;
}

export function NumberInput({
  value,
  className,
  onChange,
  min = 0,
  max = Infinity,
  ...props
}: NumberInputProps) {
  function increment() {
    if (value < max) {
      onChange(value + 1);
    }
  }

  function decrement() {
    if (value > min) {
      onChange(value - 1);
    }
  }

  return (
    <div className="flex gap-1">
      <Button
        variant="outline"
        size="icon"
        onClick={decrement}
        aria-label="Increment quantity"
      >
        <MinusIcon />
      </Button>
      <Input
        type="number"
        aria-label="Quantity"
        {...props}
        readOnly
        className={cn(
          'w-12 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
          className
        )}
        value={String(value)}
      />
      <Button
        variant="outline"
        size="icon"
        onClick={increment}
        aria-label="Increment quantity"
      >
        <PlusIcon />
      </Button>
    </div>
  );
}
