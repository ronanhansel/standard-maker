import type { DictionaryType } from '@/lib/types';
import VietnamFlag from '@/public/images/misc/vietnam.svg';
import Image from 'next/image';

export const CallOut = ({ dictionary }: { dictionary: DictionaryType }) => {
  return (
    <div className='hidden p-20 md:flex'>
      <div className='mx-auto max-w-5xl rounded-full border border-gray-700 bg-neutral-900 shadow-[inset_0_-3px_2px_rgba(255,255,255,0.1)]'>
        <span className='flex items-center justify-center px-4'>
          <Image
            src={VietnamFlag}
            alt='Vietnam Flag'
            width={20}
            height={20}
            className='inline-block'
          />
          <p className='px-2 py-2 text-center text-sm'>{dictionary.pricing.callOut}</p>
          <Image
            src={VietnamFlag}
            alt='Vietnam Flag'
            width={20}
            height={20}
            className='inline-block'
          />
        </span>
      </div>
    </div>
  );
};
