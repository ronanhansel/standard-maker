'use client';

import { Button } from '@/components/ui/button';
import { blurUpAnimation, wordAnimation } from '@/lib/constants';
import type { DictionaryType } from '@/lib/types';
import { motion } from 'framer-motion';
import { MoveRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { trackCTAClick } from '../posthog-provider';
import { AuroraBackground } from '../ui/aurora-background';
import { ContainerTextFlip } from '../ui/container-text-flip';
import { HeroImages } from './hero-images';

export const Hero5 = ({ dictionary }: { dictionary: DictionaryType }) => {
  // Split headline into words for animation
  const headlineWords = dictionary.hero.headline.split(' ');

  // Full text for SEO (combines headline with each possible adjective)
  const seoHeadlineVariations = [
    dictionary.hero.headlineAdjective1,
    dictionary.hero.headlineAdjective2,
    dictionary.hero.headlineAdjective3,
    dictionary.hero.headlineAdjective4
  ].map((adj) => `${dictionary.hero.headline} ${adj}`);

  const seoHeadlineText = seoHeadlineVariations.join(', ');

  const router = useRouter();

  return (
    <div className='relative h-screen'>
      <div className='flex h-full flex-col items-start justify-center gap-5 px-5 py-10'>
        <h1 className='font-[horizon] text-[7rem] font-bold whitespace-nowrap'>Standard Maker</h1>
      </div>
    </div>
  );
};
