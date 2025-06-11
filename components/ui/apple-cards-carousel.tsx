'use client';

import React, { createContext, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { IconArrowNarrowLeft, IconArrowNarrowRight } from '@tabler/icons-react';
import { motion } from 'motion/react';
import type { ImageProps } from 'next/image';
import Image from 'next/image';

interface CarouselProps {
  items: React.ReactNode[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  link?: string;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
  hoveredCardIndex: number | null;
  setHoveredCardIndex: (index: number | null) => void;
}>({
  onCardClose: () => {},
  currentIndex: 0,
  hoveredCardIndex: null,
  setHoveredCardIndex: () => {}
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{
        onCardClose: handleCardClose,
        currentIndex,
        hoveredCardIndex,
        setHoveredCardIndex
      }}
    >
      <div className='relative w-full'>
        <div
          className='flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] md:py-20'
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              'absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l'
            )}
          />

          <div
            className={cn(
              'flex flex-row justify-start gap-4 pl-4',
              'mx-auto max-w-7xl' // remove max-w-4xl if you want the carousel to span the full width of its container
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: 'easeOut',
                    once: true
                  }
                }}
                key={'card' + index}
                className='rounded-3xl last:pr-[5%] md:last:pr-[33%]'
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className='mr-10 flex justify-end gap-2'>
          <button
            className='relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50'
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className='h-6 w-6 text-gray-500' />
          </button>
          <button
            className='relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50'
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className='h-6 w-6 text-gray-500' />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  pivot = 'center',
  layout = false
}: {
  card: Card;
  index: number;
  pivot?:
    | 'top left'
    | 'top right'
    | 'bottom left'
    | 'bottom right'
    | 'center'
    | 'center left'
    | 'center right';
  layout?: boolean;
}) => {
  const { hoveredCardIndex, setHoveredCardIndex } = React.useContext(CarouselContext);

  const handleOpen = () => {
    if (card.link) {
      window.open(card.link, '_blank');
    }
  };

  return (
    <motion.button
      layoutId={layout ? `card-${card.title}` : undefined}
      onClick={handleOpen}
      animate={{
        filter:
          hoveredCardIndex !== null && hoveredCardIndex !== index
            ? 'blur(2.5px) brightness(0.5)'
            : 'blur(0px) brightness(1)'
      }}
      onMouseEnter={() => setHoveredCardIndex(index)}
      onMouseLeave={() => setHoveredCardIndex(null)}
      className='relative z-10 flex h-80 w-56 cursor-pointer flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 md:h-[40rem] md:w-96 dark:bg-neutral-900'
    >
      <div className='pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent' />
      <div className='relative z-40 p-8'>
        <motion.p
          layoutId={layout ? `category-${card.category}` : undefined}
          className='text-left font-sans text-sm font-medium text-white md:text-base'
        >
          {card.category}
        </motion.p>
        <motion.p
          layoutId={layout ? `title-${card.title}` : undefined}
          className='mt-2 max-w-xs text-left font-sans text-xl font-semibold [text-wrap:balance] text-white md:text-3xl'
        >
          {card.title}
        </motion.p>
      </div>
      {card.link && (
        <div className='bg-background absolute right-10 bottom-10 z-[999] rounded-full p-2 shadow-lg'>
          <IconArrowNarrowRight className='h-6 w-6 text-white' />
        </div>
      )}
      <BlurImage
        src={card.src}
        alt={card.title}
        fill
        className='absolute inset-0 z-10 object-cover'
        pivot={pivot}
      />
    </motion.button>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  pivot = 'center',
  ...rest
}: ImageProps & {
  pivot?:
    | 'top left'
    | 'top right'
    | 'bottom left'
    | 'bottom right'
    | 'center'
    | 'center left'
    | 'center right';
}) => {
  const [isLoading, setLoading] = useState(true);

  const getObjectPosition = (pivot: string) => {
    switch (pivot) {
      case 'top left':
        return 'left top';
      case 'top right':
        return 'right top';
      case 'bottom left':
        return 'left bottom';
      case 'bottom right':
        return 'right bottom';
      case 'center left':
        return 'left center';
      case 'center right':
        return 'right center';
      case 'center':
      default:
        return 'center';
    }
  };

  return (
    <Image
      className={cn(
        'h-full w-full transition duration-300',
        isLoading ? 'blur-sm' : 'blur-0',
        className
      )}
      onLoad={() => setLoading(false)}
      src={src as string}
      width={width}
      height={height}
      loading='lazy'
      decoding='async'
      style={{ objectFit: 'cover', objectPosition: getObjectPosition(pivot) }}
      blurDataURL={typeof src === 'string' ? src : undefined}
      alt={alt ? alt : 'Background of a beautiful view'}
      {...rest}
    />
  );
};
