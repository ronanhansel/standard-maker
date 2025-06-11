import type { DictionaryType } from '@/lib/types';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export const Address = ({ dictionary }: { dictionary: DictionaryType }) => {
  return (
    <div className='z-20 w-full'>
      <div className='container mx-auto max-w-5xl px-4 sm:px-6 md:px-10'>
        <div className='container grid grid-cols-1 items-center gap-4 rounded-lg border p-4 sm:gap-6 sm:p-6 md:gap-8 md:p-8 lg:grid-cols-2'>
          {/* Image block on the left */}
          <div className={cn('order-1 flex flex-col gap-6 sm:gap-8 md:gap-10 lg:order-none')}>
            <div className='flex flex-col gap-6 sm:gap-8 md:gap-10'>
              <h2 className='text-2xl font-bold'>Press & professional</h2>
              <p className='text-muted-foreground'>
                We are open to all press and professional inquiries. If you are interested in
                partnering with us, let us know.
              </p>
              <Link
                href='mailto:contact@lecole.tech?subject=%5BLEC-PRO%5D%3A%20Professional%20inquiry%20%7C%20Partnership%20request'
                className='text-muted-foreground hover:text-primary w-fit hover:underline'
              >
                contact@lecole.tech
              </Link>
            </div>
          </div>
          {/* Text block on the right */}
          <div className='order-2 flex flex-col gap-6 sm:gap-8 md:gap-10 lg:order-none'>
            <div className='flex flex-col gap-6 sm:gap-8 md:gap-10'>
              <h2 className='text-2xl font-bold'>Service Support</h2>
              <p className='text-muted-foreground'>
                Building an EdTech platform is hard... If you have any question regarding our
                services, please contact us.
              </p>
              <Link
                href='mailto:support@lecole.tech?subject=%5BLEC-SUP%5D%3A%20Support%20request%20-%20(Title)'
                className='text-muted-foreground hover:text-primary w-fit hover:underline'
              >
                support@lecole.tech
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
