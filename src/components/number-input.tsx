'use client';

import { MinusIcon, PlusIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { cn } from '@/lib/utils';
import React, { useEffect } from 'react';

interface NumberInputProps extends React.ComponentProps<'input'> {
  defaultValue?: number | string;
  onValueChange?: (value: number) => void;
}

export function NumberInput({
  className,
  defaultValue = 1,
  onValueChange,
  ...props
}: NumberInputProps) {
  const [value, setValue] = React.useState<number>(
    typeof defaultValue === 'string' ? parseInt(defaultValue) : defaultValue
  );

  useEffect(() => {
    onValueChange?.(value);
  }, [onValueChange, value]);

  function increment() {
    setValue((prev) => prev + 1);
  }

  function decrement() {
    setValue((prev) => Math.max(1, prev - 1));
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
        onChange={(e) => {
          setValue(parseInt(e.target.value));
        }}
      />
      <Button
        variant="outline"
        size="icon"
        onClick={increment}
        aria-label="Decrement quantity"
      >
        <PlusIcon />
      </Button>
    </div>
  );
}
