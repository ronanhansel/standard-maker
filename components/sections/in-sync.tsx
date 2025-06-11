'use client';

import type React from 'react';
import { forwardRef, useRef } from 'react';
import type { DictionaryType } from '@/lib/types';
import { cn } from '@/lib/utils';

import { AnimatedBeam } from '../magicui/animated-beam';

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
  ({ className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]',
          className
        )}
      >
        {children}
      </div>
    );
  }
);

Circle.displayName = 'Circle';

export function InSync({ dictionary }: { dictionary: DictionaryType }) {
  return (
    <div className='flex w-full flex-col items-center justify-center p-8'>
      <div className='mx-auto max-w-7xl px-10 text-center'>
        <h2>{dictionary['inSync'].headline}</h2>
        <p className='text-muted-foreground mt-2 max-w-xl'>{dictionary['inSync'].description}</p>
      </div>
      <AnimatedBeamDisplay className='max-w-xl' />
    </div>
  );
}

const AnimatedBeamDisplay = ({ className }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  return (
    <div
      className={cn(
        'relative flex w-full items-center justify-center overflow-hidden p-10',
        className
      )}
      ref={containerRef}
    >
      <div className='flex size-full flex-col items-stretch justify-between gap-10'>
        <div className='flex flex-row justify-between'>
          <Circle ref={div1Ref}>
            <Icons.user />
          </Circle>
          <Circle ref={div2Ref}>
            <Icons.googleDrive />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        gradientStartColor='#171717'
        gradientStopColor='#fff'
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div2Ref}
        startYOffset={10}
        endYOffset={10}
        curvature={-20}
      />
      <AnimatedBeam
        gradientStartColor='#171717'
        gradientStopColor='#fff'
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div2Ref}
        startYOffset={-10}
        endYOffset={-10}
        curvature={20}
        reverse
      />
    </div>
  );
};

const Icons = {
  googleDrive: () => (
    <svg width='100' height='100' viewBox='0 0 87.3 78' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z'
        fill='#0066da'
      />
      <path
        d='m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z'
        fill='#00ac47'
      />
      <path
        d='m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z'
        fill='#ea4335'
      />
      <path
        d='m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z'
        fill='#00832d'
      />
      <path
        d='m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z'
        fill='#2684fc'
      />
      <path
        d='m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z'
        fill='#ffba00'
      />
    </svg>
  ),
  user: () => (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='#000000'
      strokeWidth='2'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' />
      <circle cx='12' cy='7' r='4' />
    </svg>
  )
};
