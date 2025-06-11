import { CardSpotlight } from '@/components/ui/card-spotlight';
import type { DictionaryType } from '@/lib/types';
import { cn } from '@/lib/utils';
import Link from 'next/link';

import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { ItemCheck } from './item-check';

export function Pricing({ dictionary }: { dictionary: DictionaryType }) {
  return (
    <div className='animate-in fade-in-0 relative flex w-full flex-col items-center justify-center overflow-x-hidden rounded-md py-56 antialiased duration-1000'>
      <div className='mx-auto max-w-2xl p-4'>
        <h1 className='relative z-10 bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-center font-sans font-bold text-transparent'>
          {dictionary.pricing.aboutThePrice}
        </h1>
        <br />
        <p className='relative z-10 mx-auto my-2 max-w-lg text-center text-neutral-500'>
          {dictionary.pricing.tagline}
        </p>
      </div>
      {/* Background */}
      <div className='bg-background absolute inset-0 flex h-[100%] w-full items-center justify-center mask-radial-from-0% mask-radial-to-100% mask-radial-at-center md:h-[100%]'>
        <div
          className={cn(
            'absolute inset-0',
            '[background-size:20px_20px]',
            '[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]',
            'dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]'
          )}
        />
      </div>
      <div className='mx-auto grid max-w-2xl grid-cols-1 items-center gap-4 md:grid-cols-2'>
        <CardSpotlightFree dictionary={dictionary} />
        <CardSpotlightPro dictionary={dictionary} />
      </div>
    </div>
  );
}

export function CardSpotlightFree({ dictionary }: { dictionary: DictionaryType }) {
  return (
    <CardSpotlight className='relative h-140 w-80 rounded-xl'>
      <h3 className='relative z-20 mt-2 font-bold text-white'>{dictionary.pricing.free}</h3>
      <p className='relative z-20 mt-2 text-lg md:text-xl'>{dictionary.pricing.freePrice}</p>
      <div className='relative z-20 mt-4 leading-5 text-neutral-200'>
        <Separator className='my-2' />
        <p className='text-muted-foreground py-2 text-sm'>{dictionary.pricing.freeDescription}</p>
        <Separator className='my-2' />
        <div className='mt-2 flex flex-col gap-4'>
          <ItemCheck title={dictionary.pricing.features.unlimitedNotes} />
          <ItemCheck title={dictionary.pricing.features.crossDeviceSync} />
          <ItemCheck title={dictionary.pricing.features.fastestNoteTaking} />
          <ItemCheck title={dictionary.pricing.features.storage25MB} />
          <ItemCheck title={dictionary.pricing.features.aiAutoCompletion} dashed={true} />
          <ItemCheck title={dictionary.pricing.features.threeLLMModels} dashed={true} />
        </div>
      </div>
      <Link href={'https://app.lecole.tech/'}>
        {' '}
        <Button className='bg-muted absolute right-0 bottom-5 left-1/2 z-20 w-40 -translate-x-1/2 text-white'>
          {dictionary.pricing.getStarted}
        </Button>
      </Link>
    </CardSpotlight>
  );
}

export function CardSpotlightPro({ dictionary }: { dictionary: DictionaryType }) {
  return (
    <CardSpotlight className='relative h-150 w-80 rounded-xl' color='#441f00'>
      <h3 className='relative z-20 mt-2 font-bold text-white'>{dictionary.pricing.pro}</h3>
      <p className='relative z-20 mt-2 text-lg md:text-xl'>{dictionary.pricing.proPrice}</p>
      <div className='relative z-20 mt-4 leading-5 text-neutral-200'>
        <Separator className='my-2' />
        <p className='text-muted-foreground py-2 text-sm'>{dictionary.pricing.proDescription}</p>
        <Separator className='my-2' />
        <div className='mt-2 flex flex-col gap-4'>
          <ItemCheck title={dictionary.pricing.features.allFreeFeatures} />
          <ItemCheck title={dictionary.pricing.features.storage2GB} />
          <ItemCheck title={dictionary.pricing.features.unlimitedAI} />
          <ItemCheck title={dictionary.pricing.features.tenPlusModels} />
          <ItemCheck title={dictionary.pricing.features.customLLMAPI} />
          <ItemCheck title={dictionary.pricing.features.supportMission} />
        </div>
      </div>
      <Link className='' href={dictionary.pricing.getStartedLink}>
        <Button className='absolute right-0 bottom-5 left-1/2 z-20 w-40 -translate-x-1/2 bg-white/80 hover:bg-white'>
          {dictionary.pricing.getStarted}
        </Button>
      </Link>
    </CardSpotlight>
  );
}
