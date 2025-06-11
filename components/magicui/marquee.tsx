'use client';

import type { ComponentPropsWithoutRef } from 'react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface MarqueeProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Optional CSS class name to apply custom styles
   */
  className?: string;
  /**
   * Whether to reverse the animation direction
   * @default false
   */
  reverse?: boolean;
  /**
   * Whether to pause the animation on hover
   * @default false
   */
  pauseOnHover?: boolean;
  /**
   * Content to be displayed in the marquee
   */
  children: React.ReactNode;
  /**
   * Whether to animate vertically instead of horizontally
   * @default false
   */
  vertical?: boolean;
  /**
   * Number of times to repeat the content
   * @default 4
   */
  repeat?: number;
  /**
   * Whether items should randomly fade in on initial render
   * @default false
   */
  randomFadeIn?: boolean;
  /**
   * Maximum delay (ms) for random fade in animation
   * @default 3000
   */
  maxFadeInDelay?: number;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  randomFadeIn = false,
  maxFadeInDelay = 3000,
  ...props
}: MarqueeProps) {
  const [fadeInElements, setFadeInElements] = useState<{
    [key: number]: boolean;
  }>({});

  useEffect(() => {
    if (!randomFadeIn) return;

    // Get count of direct children to assign random delays
    const childCount = Array.isArray(children) ? children.length : 1;
    const newFadeInElements: { [key: number]: boolean } = {};

    Array.from({ length: childCount }).forEach((_, index) => {
      const delay = Math.floor(Math.random() * maxFadeInDelay);
      setTimeout(() => {
        setFadeInElements((prev) => ({ ...prev, [index]: true }));
      }, delay);
    });

    // Initialize all elements as hidden
    setFadeInElements(newFadeInElements);
  }, [children, randomFadeIn, maxFadeInDelay]);

  // Clone children and add fade-in effect if randomFadeIn is enabled
  const wrappedChildren = randomFadeIn ? (
    Array.isArray(children) ? (
      children.map((child, idx) => (
        <div
          key={idx}
          className={cn(
            'transition-opacity duration-500',
            fadeInElements[idx] ? 'opacity-100' : 'opacity-0'
          )}
        >
          {child}
        </div>
      ))
    ) : (
      <div
        className={cn(
          'transition-opacity duration-500',
          fadeInElements[0] ? 'opacity-100' : 'opacity-0'
        )}
      >
        {children}
      </div>
    )
  ) : (
    children
  );

  return (
    <div
      {...props}
      className={cn(
        'group flex [gap:var(--gap)] overflow-hidden p-2 [--duration:40s] [--gap:1rem]',
        {
          'flex-row': !vertical,
          'flex-col': vertical
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn('flex shrink-0 justify-around [gap:var(--gap)]', {
              'animate-marquee flex-row': !vertical,
              'animate-marquee-vertical flex-col': vertical,
              'group-hover:[animation-play-state:paused]': pauseOnHover,
              '[animation-direction:reverse]': reverse
            })}
          >
            {wrappedChildren}
          </div>
        ))}
    </div>
  );
}
