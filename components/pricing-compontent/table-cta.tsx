import type { DictionaryType } from '@/lib/types';
import { cn } from '@/lib/utils';
import Link from 'next/link';

import { Button } from '../ui/button';

export const TableCTA = ({
  dictionary,
  showBackground = true,
  planType = 'free'
}: {
  dictionary: DictionaryType;
  showBackground?: boolean;
  planType?: 'free' | 'pro';
}) => {
  return (
    <div className='flex justify-center pt-3 pb-4'>
      {planType === 'free' ? (
        <Link href='https://app.lecole.tech'>
          <Button className={cn('bg-muted w-40 text-white')}>
            {dictionary.pricing.getStarted}
          </Button>
        </Link>
      ) : (
        <Link href={dictionary.pricing.getStartedLink}>
          <Button className={cn('w-40 bg-white/80 hover:bg-white')}>
            {dictionary.pricing.getStarted}
          </Button>
        </Link>
      )}
    </div>
  );
};
