'use client';

import type { DictionaryType } from '@/lib/types';

import { Vortex } from '../ui/vortex';

export const MadeInVietnam = ({ dictionary }: { dictionary: DictionaryType }) => {
  return (
    <div className='relative h-[200px] w-full overflow-hidden md:h-[400px]'>
      <Vortex
        className='flex h-full w-full flex-col items-center justify-center px-2 py-4 md:px-10'
        backgroundColor='transparent'
        rangeY={200}
        baseRadius={1}
        particleCount={150}
        rangeRadius={2}
        baseHue={335}
        rangeSpeed={0.5}
      >
        <h2 className='text-center text-2xl font-bold text-white md:text-6xl'>
          Proudly made in Vietnam
        </h2>
        <p className='text-muted-foreground mt-6 max-w-xl text-center text-sm md:text-2xl'>
          Crafted with love and passion by our team of experts from the S-shaped country.
        </p>
      </Vortex>
    </div>
  );
};
