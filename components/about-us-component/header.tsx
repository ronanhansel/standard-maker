'use client';

import { VideoText } from '@/components/magicui/video-text';
import { wordAnimation } from '@/lib/constants';
import type { DictionaryType } from '@/lib/types';
import { motion } from 'framer-motion';

export const AboutUsHeader = ({ dictionary }: { dictionary: DictionaryType }) => {
  const headlineWords = dictionary.about.madeWithPrideIn.split(' ');

  // Create SEO-friendly text content for About Us page
  const seoHeadlineText = `${dictionary.about.madeWithPrideIn} VIỆT NAM`;
  // Get first paragraph of message for SEO description
  const seoDescriptionText =
    dictionary.about.message.split('\n\n')[0] || 'LECOLE is made with pride in Vietnam.';

  return (
    <div className='w-full'>
      {/* Hidden text for SEO */}
      <div className='sr-only'>
        <h1>{seoHeadlineText}</h1>
        <p>{seoDescriptionText}</p>
      </div>

      <div aria-label={seoHeadlineText}>
        {headlineWords.map((word, i) => (
          <motion.h1
            key={i}
            className='about-header z-10 mr-2 inline-block bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-center font-sans font-bold text-transparent'
            custom={i}
            initial='hidden'
            animate='visible'
            variants={wordAnimation({ multiplier: 1 })}
          >
            {word}
          </motion.h1>
        ))}
      </div>
      <motion.div
        className='aspect-[27/9] w-full overflow-hidden'
        initial={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 3.5, ease: 'easeOut' }}
        aria-label='VIỆT NAM'
      >
        <VideoText
          src='https://storage.lecole.tech/videos/vietnam_mashew_cropped.mp4'
          fontFamily='serif'
        >
          VIỆT NAM
        </VideoText>
      </motion.div>
    </div>
  );
};
