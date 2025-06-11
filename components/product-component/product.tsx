'use client';

import { useEffect, useState } from 'react';
import { blurUpAnimation, wordAnimation } from '@/lib/constants';
import type { DictionaryType } from '@/lib/types';
import { cn } from '@/lib/utils';
import LogoIconWhite from '@/public/icons/logo-icon-white.svg';
import {
  IconBlockquote,
  IconBrandGoogleDrive,
  IconCalendar,
  IconCarambola,
  IconChartBar,
  IconNote,
  IconPlayerRecordFilled,
  IconSparkles,
  IconUserSearch,
  IconWorld
} from '@tabler/icons-react';
import { motion, useAnimate } from 'framer-motion';
import Image from 'next/image';

import { Marquee } from '../magicui/marquee';

export function Product({ dictionary }: { dictionary: DictionaryType }) {
  const headlineWords = dictionary.product.aboutTheProduct.split(' ');

  // Create SEO-friendly text content
  const seoHeadlineText = dictionary.product.aboutTheProduct;
  const seoTaglineText = dictionary.product.productDescription;

  const [isLoaded, setIsLoaded] = useState(false);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isLoaded) {
      animate([
        [
          scope.current,
          {
            opacity: 1,
            filter: 'blur(0px)',
            scale: 1
          },
          {
            delay: 0,
            duration: 1,
            ease: 'easeOut'
          }
        ],
        [
          scope.current,
          {
            background: 'linear-gradient(135deg, #737373, #171717)'
          },
          {
            duration: 1.5,
            ease: [0.83, 0, 0.17, 1]
          }
        ]
      ]);
      animate(
        scope.current,
        {
          boxShadow: '0 -5px 50px rgba(255,255,255,0.75)'
        },
        {
          delay: 1,
          duration: 1.5,
          ease: [0.83, 0, 0.17, 1]
        }
      );
    }
  }, [isLoaded]);
  return (
    <div className='animate-in fade-in-0 bg-background flex w-full flex-col items-center justify-center overflow-x-hidden rounded-md pb-10 antialiased duration-1000'>
      {/* Hidden text for SEO */}
      <div className='sr-only'>
        <h1>{seoHeadlineText}</h1>
        <p>{seoTaglineText}</p>
      </div>

      <div className='relative h-[500px] w-[900px] pt-50'>
        <motion.div
          ref={scope}
          style={{
            boxShadow: '0px 0px 50px rgba(255,255,255,0)',
            opacity: 0,
            filter: 'blur(25px)',
            scale: 1.2,
            background: 'linear-gradient(0deg, #262626, #0a0a0a)'
          }}
          className='absolute top-1/2 left-1/2 z-30 flex h-42 w-42 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-4xl bg-gradient-to-br from-neutral-500 to-neutral-900 shadow-[inset_0_-5px_10px_rgba(255,255,255,0.1)]'
        >
          <Image
            src={LogoIconWhite}
            alt='Logo'
            className='aspect-square w-40 object-contain'
            onLoad={() => {
              setIsLoaded(true);
            }}
          />
        </motion.div>
        <MarqueeDemo className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mask-r-from-40% mask-r-to-100% mask-b-from-50% mask-b-to-100% mask-l-from-50% mask-l-to-100% mask-radial-at-center' />
      </div>
      <div className='mx-auto flex max-w-xl flex-col items-center justify-center gap-2'>
        <span aria-label={seoHeadlineText}>
          {headlineWords.map((word, i) => (
            <motion.h1
              key={i}
              className='z-10 mr-2 inline-block bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-center font-sans font-bold text-transparent'
              custom={i}
              initial='hidden'
              animate='visible'
              variants={wordAnimation({ multiplier: 1 })}
            >
              {word}
            </motion.h1>
          ))}
        </span>
        <span
          className='text-muted-foreground px-10 text-center text-lg leading-relaxed tracking-tight md:text-xl'
          aria-label={seoTaglineText}
        >
          <motion.span
            className='mr-1 inline-block'
            initial='hidden'
            animate='visible'
            variants={blurUpAnimation}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
          >
            {dictionary.product.productDescription}
          </motion.span>
        </span>
      </div>
    </div>
  );
}

const firstRow = [
  {
    icon: <IconCalendar size={35} />
  },
  {
    icon: <IconNote size={35} />
  },
  {
    icon: <IconSparkles size={35} />
  },
  {
    icon: <IconWorld size={35} />
  },
  {
    icon: <IconChartBar size={35} />
  },
  {
    icon: <IconCarambola size={35} />
  }
];

const secondRow = [
  {
    icon: <IconNote size={35} />
  },
  {
    icon: <IconPlayerRecordFilled size={35} />
  },
  {
    icon: <IconBrandGoogleDrive size={35} />
  },
  {
    icon: <IconUserSearch size={35} />
  },
  {
    icon: <IconBlockquote size={35} />
  }
];

const thirdRow = [
  {
    icon: <IconCalendar size={35} />
  },
  {
    icon: <IconNote size={35} />
  },
  {
    icon: <IconSparkles size={35} />
  },
  {
    icon: <IconWorld size={35} />
  },
  {
    icon: <IconChartBar size={35} />
  },
  {
    icon: <IconCarambola size={35} />
  }
];

const MarqueeIcon = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <figure
      className={cn(
        'relative aspect-square h-20 overflow-hidden rounded-xl border p-4',
        'flex flex-row items-center justify-center border-gray-50/[.1] bg-gray-50/[.10]'
      )}
    >
      <div>{icon}</div>
    </figure>
  );
};

export function MarqueeDemo({ className }: { className: string }) {
  return (
    <div
      className={cn(
        'relative flex w-full flex-col items-center justify-center overflow-hidden',
        className
      )}
    >
      <Marquee className='[--duration:10s]' randomFadeIn maxFadeInDelay={2800}>
        {firstRow.map((productIcon, index) => (
          <MarqueeIcon key={index} {...productIcon} />
        ))}
      </Marquee>
      <Marquee className='[--duration:15s]' randomFadeIn maxFadeInDelay={3000}>
        {secondRow.map((productIcon, index) => (
          <MarqueeIcon key={index} {...productIcon} />
        ))}
      </Marquee>
      <Marquee className='[--duration:13s]' randomFadeIn maxFadeInDelay={3500}>
        {thirdRow.map((productIcon, index) => (
          <MarqueeIcon key={index} {...productIcon} />
        ))}
      </Marquee>
      <Marquee className='[--duration:14s]' randomFadeIn maxFadeInDelay={2500}>
        {secondRow.map((productIcon, index) => (
          <MarqueeIcon key={index} {...productIcon} />
        ))}
      </Marquee>
    </div>
  );
}
