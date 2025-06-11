import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function SectionWrapper({ children, className, id }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        'w-full py-8 md:py-12', // Base padding that creates consistent spacing between sections
        className // Allow custom classes to override or extend base styles
      )}
    >
      {children}
    </section>
  );
}
