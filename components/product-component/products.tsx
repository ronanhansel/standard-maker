import type { DictionaryType } from '@/lib/types';
import LecoleCollabSVG from '@/public/images/features/lecole_collab.svg';
import ModelsSVG from '@/public/images/features/models.svg';
import { IconExternalLink } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '../ui/button';
import { GlareCard } from '../ui/glare-card';

export const Products = ({ dictionary }: { dictionary: DictionaryType }) => {
  return (
    <div className='container mx-auto grid w-fit grid-cols-1 gap-6 px-4 sm:gap-8 sm:px-6 md:grid-cols-2 md:gap-10 md:px-10'>
      <Link href='/workspace'>
        <GlareCard className='relative flex flex-col items-start justify-end border-neutral-950 bg-neutral-950 py-6 sm:py-8'>
          <Image
            src={LecoleCollabSVG}
            alt='Lecole Collab'
            className='h-full w-full mask-b-to-100% mask-radial-from-0% mask-radial-at-center object-cover object-left'
          />
          <div className='px-4 sm:px-6'>
            <p className='text-base font-bold text-white sm:text-lg'>
              {dictionary.products.workspace.title}
            </p>
            <p className='mt-3 h-16 text-sm font-normal text-neutral-200 sm:mt-4 sm:h-20 sm:text-base'>
              {dictionary.products.workspace.description}
            </p>
          </div>
          <Button
            variant='ghost'
            className='absolute right-4 bottom-4 sm:right-7 sm:bottom-5'
            size='icon'
          >
            <IconExternalLink size={25} />
          </Button>
        </GlareCard>
      </Link>
      <GlareCard className='flex flex-col items-start justify-end border-neutral-950 bg-neutral-950 py-6 sm:py-8'>
        <Image
          src={ModelsSVG}
          alt='Lecole Collab'
          className='h-full w-full mask-b-to-100% mask-radial-from-0% mask-radial-at-center object-cover'
        />
        <div className='px-4 sm:px-6'>
          <p className='text-base font-bold text-white sm:text-lg'>
            {dictionary.products.companion.title}
          </p>
          <p className='mt-3 h-16 text-sm font-normal text-neutral-200 sm:mt-4 sm:h-20 sm:text-base'>
            {dictionary.products.companion.description}
          </p>
        </div>
      </GlareCard>
    </div>
  );
};
