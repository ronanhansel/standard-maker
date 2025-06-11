'use client';

import { useEffect, useState } from 'react';
import { blurUpAnimation, wordAnimation } from '@/lib/constants';
import type { DictionaryType } from '@/lib/types';
import { motion, useAnimate } from 'framer-motion';

export function Contact({ dictionary }: { dictionary: DictionaryType }) {
  // Create SEO-friendly text content
  const seoHeadlineText = 'Contact Us';
  const headlineWords = 'Contact Us'.split(' ');
  const seoTaglineText =
    'With user-centric focus in mind, we are always listening to your feedback. Let us know how we can help.';

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
      <div className='sr-only'>
        <h1>{seoHeadlineText}</h1>
        <p>{seoTaglineText}</p>
      </div>
      <div className='h-20' />
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
