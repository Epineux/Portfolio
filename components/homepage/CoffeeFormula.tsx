'use client'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import katex from 'katex';
import 'katex/dist/katex.min.css';
import { Info } from 'lucide-react';
import { useState } from 'react';

const CoffeeFormula = ({ formula }: { formula: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const renderFormula = () => {
    if (!formula) return null;

    try {
      const html = katex.renderToString(formula, {
        throwOnError: false,
      });

      return (
        <div
          className="inline-block text-white leading-10"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      );
    } catch (error) {
      console.error('Error rendering formula:', error);
      return <span className="ml-2xl text-red-500">Wrong Formula</span>;
    }
  };
  return (
      <Popover open={isOpen}
        onOpenChange={setIsOpen}
      >
        <PopoverTrigger asChild
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <Info className="cursor-pointer w-5 h-5 mb-2xs" />
        </PopoverTrigger>
        <PopoverContent
          className="w-96 bg-primary"
          side="top"
          align="end"
        >
          <h3 className="h3 text-center mb-2xl text-accent">Coffee Drinks Formula</h3>
          {renderFormula()}
        </PopoverContent>
      </Popover>
  )
}

export default CoffeeFormula
