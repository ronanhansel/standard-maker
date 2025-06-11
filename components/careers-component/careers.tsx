'use client';

import { useEffect, useState } from 'react';
import { blurUpAnimation, wordAnimation } from '@/lib/constants';
import type { DictionaryType } from '@/lib/types';
import { cn } from '@/lib/utils';
import LogoIconWhite from '@/public/icons/logo-icon-white.svg';
import { motion, useAnimate } from 'framer-motion';
import Image from 'next/image';

import Counter from '../counter';

export function Careers({ dictionary }: { dictionary: DictionaryType }) {
  const headlineWords = 'About Careers'.split(' ');

  // Create SEO-friendly text content
  const seoHeadlineText = 'About Careers';
  const seoTaglineText = 'Join us and build the future of education.';

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
        ]
      ]);
    }
  }, [isLoaded]);
  return (
    <div className='animate-in fade-in-0 bg-background relative flex w-full flex-col items-center justify-center overflow-x-hidden rounded-md pb-10 antialiased duration-1000'>
      {/* Hidden text for SEO */}
      <div className='sr-only'>
        <h1>{seoHeadlineText}</h1>
        <p>{seoTaglineText}</p>
      </div>
      <div
        className={cn(
          'absolute inset-0',
          '[background-size:50px_50px]',
          '[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]',
          'dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]',
          'mask-radial-from-10% mask-radial-to-90% mask-radial-at-center'
        )}
      />
      <div className='relative h-[500px] w-[900px] pt-50'>
        <motion.div
          ref={scope}
          style={{
            boxShadow: '0px 0px 50px rgba(255,255,255,0)',
            opacity: 0,
            filter: 'blur(25px)',
            scale: 1.2,
            background: '#1b1c1f'
          }}
          className='absolute top-1/2 left-1/2 z-30 flex h-42 w-42 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-4xl border bg-gradient-to-br from-neutral-500 to-neutral-900 shadow-[inset_0_-5px_10px_rgba(255,255,255,0.1)]'
        >
          <Image
            src={LogoIconWhite}
            alt='Logo'
            className='aspect-square w-40 object-contain'
            onLoad={() => {
              setIsLoaded(true);
            }}
          />
          <div className='pointer-events-none absolute inset-0'>
            <svg
              width='150%'
              height='150%'
              className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
            >
              <defs>
                <motion.marker
                  id='leftArrowHead'
                  orient='auto'
                  markerWidth='6'
                  markerHeight='6'
                  refX='6'
                  refY='3'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1.2, ease: [0.87, 0, 0.13, 1] }}
                >
                  <motion.path d='M6,0 V6 L0,3 Z' fill='#c1c7d0' />
                </motion.marker>
                <motion.marker
                  id='rightArrowHead'
                  orient='auto'
                  markerWidth='6'
                  markerHeight='6'
                  refX='0'
                  refY='3'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1.2, ease: [0.87, 0, 0.13, 1] }}
                >
                  <motion.path d='M0,0 V6 L6,3 Z' fill='#c1c7d0' />
                </motion.marker>
              </defs>

              <motion.path
                d={`M33,55 v${isLoaded ? '140' : '0'}`}
                stroke='#c1c7d0'
                strokeWidth='1.5'
                fill='none'
                markerStart='url(#leftArrowHead)'
                markerEnd='url(#rightArrowHead)'
                initial={{ pathLength: 0, pathOffset: 0.5 }}
                animate={{ pathLength: 1, pathOffset: 0 }}
                transition={{ delay: 0.5, duration: 1.2, ease: [0.87, 0, 0.13, 1] }}
              />

              <motion.path
                d={`M55,215 h${isLoaded ? '140' : '0'}`}
                stroke='#c1c7d0'
                strokeWidth='1.5'
                fill='none'
                markerStart='url(#leftArrowHead)'
                markerEnd='url(#rightArrowHead)'
                initial={{ pathLength: 0, pathOffset: 0.5 }}
                animate={{ pathLength: 1, pathOffset: 0 }}
                transition={{ delay: 1, duration: 1.2, ease: [0.87, 0, 0.13, 1] }}
              />
              <motion.circle
                cx='200'
                cy='55'
                r='10'
                stroke='#c1c7d0'
                strokeWidth='1.5'
                fill='none'
                markerStart='url(#leftArrowHead)'
                markerEnd='url(#rightArrowHead)'
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 2.2, duration: 1.2, ease: [0.87, 0, 0.13, 1] }}
              />
              <motion.path
                d={`M208,50 L220,40 L240,40`}
                stroke='#c1c7d0'
                strokeWidth='1.5'
                fill='none'
                initial={{ pathLength: 0, pathOffset: 1 }}
                animate={{ pathLength: 1, pathOffset: 0 }}
                transition={{ delay: 2.5, duration: 1.2, ease: [0.87, 0, 0.13, 1] }}
              />
            </svg>
          </div>
          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ delay: 0.5, duration: 1.2, ease: [0.87, 0, 0.13, 1] }}
            className='text-muted-foreground absolute -left-11 font-mono text-xs'
          >
            Full
          </motion.div>
          <motion.div
            className='text-muted-foreground absolute -bottom-7 left-1/2 -translate-x-1/2 font-mono text-xs'
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ delay: 1, duration: 1.2, ease: [0.87, 0, 0.13, 1] }}
          >
            Relative
          </motion.div>
          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ delay: 1.5, duration: 1.2, ease: [0.87, 0, 0.13, 1] }}
            className='text-muted-foreground absolute -right-17 font-mono text-xs'
          >
            #393e46
          </motion.div>
          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ delay: 2, duration: 1.2, ease: [0.87, 0, 0.13, 1] }}
            className='text-muted-foreground absolute -top-5 -right-12 -bottom-7 font-mono text-xs'
          >
            <Counter value={32} delay={1950} />
            px
          </motion.div>
        </motion.div>
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
            {seoTaglineText}
          </motion.span>
        </span>
      </div>
    </div>
  );
}
