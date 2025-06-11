import type { DictionaryType } from '@/lib/types';

export const TableHeader = ({
  dictionary,
  showBackground = true,
  planType = 'free'
}: {
  dictionary: DictionaryType;
  showBackground?: boolean;
  planType?: 'free' | 'pro';
}) => {
  return (
    <div className='grid grid-cols-1 border-b border-neutral-700'>
      <p className='p-5 text-xl font-semibold text-white'>
        {planType === 'free'
          ? dictionary.pricing.comparisonTable.free
          : dictionary.pricing.comparisonTable.pro}
      </p>
    </div>
  );
};
