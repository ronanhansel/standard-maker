import { cn } from '@/lib/utils';

import { ItemCheck } from './item-check';

export type AvailabilityStatus = 'available' | 'limited' | 'unavailable';

export const TableCell = ({
  value,
  className
}: {
  value: AvailabilityStatus | string;
  className?: string;
}) => {
  if (typeof value === 'string' && value.includes('x.')) {
    return (
      <div className={cn('flex items-center gap-1.5 p-2 sm:gap-2 sm:p-3', className)}>
        <ItemCheck title={value.split('x.')[1]} cross />
      </div>
    );
  }

  if (typeof value === 'string' && value.includes('l.')) {
    return (
      <div className={cn('flex items-center gap-1.5 p-2 sm:gap-2 sm:p-3', className)}>
        <ItemCheck title={value.split('l.')[1]} dashed />
      </div>
    );
  }

  if (typeof value === 'string' && !['available', 'limited', 'unavailable'].includes(value)) {
    return (
      <div className={cn('flex items-center gap-1.5 p-2 sm:gap-2 sm:p-3', className)}>
        <ItemCheck title={value} />
      </div>
    );
  }

  // Handle availability status
  if (value === 'unavailable') {
    return <div className={cn('p-2 text-center text-gray-500 sm:p-3', className)}>-</div>;
  }

  return (
    <div className={cn('flex items-center p-2 sm:p-3', className)}>
      <ItemCheck title='' dashed={value === 'limited'} />
    </div>
  );
};
