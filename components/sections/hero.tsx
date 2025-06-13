'use client';

import type { DictionaryType } from '@/lib/types';
import SM from '@/public/icons/SM.svg';
import Image from 'next/image';

export const Hero5 = ({ dictionary }: { dictionary: DictionaryType }) => {
  return (
    <div className='relative h-screen'>
      <div className='flex h-full flex-col items-start justify-center gap-5 px-5 py-10'>
        <h1 className='font-[horizon] text-[7rem] font-bold whitespace-nowrap'>Standard Maker</h1>
      </div>
      <Image src={SM} alt='Standard Maker' className='absolute right-1/2 translate-x-1/2 bottom-0 scale-150' />
    </div>
  );
};
