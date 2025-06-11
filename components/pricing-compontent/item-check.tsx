import { cn } from '@/lib/utils';
import { IconCircleCheckFilled, IconCircleDashedCheck, IconCircleX } from '@tabler/icons-react';

export const ItemCheck = ({
  title,
  dashed = false,
  cross = false
}: {
  title: string;
  dashed?: boolean;
  cross?: boolean;
}) => {
  return (
    <div className='flex items-center gap-2'>
      {dashed && !cross ? (
        <IconCircleDashedCheck size={20} className='text-white/80' />
      ) : cross ? (
        <IconCircleX size={20} className='text-white/80' />
      ) : (
        <IconCircleCheckFilled size={20} />
      )}
      {title && <span className={cn('text-sm text-white', cross && 'text-white/50')}>{title}</span>}
    </div>
  );
};
