import type { DictionaryType } from '@/lib/types';
import LecoleCalendar from '@/public/images/features/lecole_calendar.svg';
import LecoleCommunity from '@/public/images/features/lecole_community.svg';
import LecoleTab from '@/public/images/interface/tab_tab.svg';
import LecoleCrossPlatform from '@/public/images/misc/cross_platform.svg';
import { IconArrowRightBar, IconCalendar, IconGlobe, IconTableColumn } from '@tabler/icons-react';
import Image from 'next/image';

import { BentoGrid, BentoGridItem } from '../ui/bento-grid';

export const ComingSoon = ({ dictionary }: { dictionary: DictionaryType }) => {
  return (
    <div className='w-full'>
      <div className='container mx-auto px-10'>
        <h1 className='pb-10'>{dictionary.comingSoon.title}</h1>
        <BentoGridSecondDemo dictionary={dictionary} />
      </div>
    </div>
  );
};

export function BentoGridSecondDemo({ dictionary }: { dictionary: DictionaryType }) {
  const items = [
    {
      title: dictionary.product.comingSoonFeatures.calendar,
      description: dictionary.product.comingSoonFeatures.calendarDesc,
      header: (
        <div className='flex h-full w-full flex-grow'>
          <Image
            src={LecoleCalendar}
            alt='Calendar'
            className='h-full w-full mask-radial-from-40% mask-radial-to-100% mask-radial-at-center object-cover'
          />
        </div>
      ),
      className: 'md:col-span-2',
      icon: <IconCalendar className='text-neutral-500' size={35} />
    },
    {
      title: dictionary.product.comingSoonFeatures.community,
      description: dictionary.product.comingSoonFeatures.communityDesc,
      header: (
        <div className='flex h-50 w-full flex-grow'>
          <Image
            src={LecoleCommunity}
            alt='Community'
            className='flex w-full mask-radial-from-40% mask-radial-to-100% mask-radial-at-center object-cover'
          />
        </div>
      ),
      className: 'md:col-span-1',
      icon: <IconGlobe className='text-neutral-500' size={35} />
    },

    {
      title: dictionary.product.comingSoonFeatures.workspace,
      description: dictionary.product.comingSoonFeatures.workspaceDesc,
      header: (
        <div className='flex h-full w-full flex-grow'>
          <Image
            src={LecoleCrossPlatform}
            alt='Cross Platform'
            className='h-full w-full mask-radial-from-40% mask-radial-to-100% mask-radial-at-top-left object-contain object-center p-5'
          />
        </div>
      ),
      className: 'md:col-span-1',
      icon: <IconTableColumn className='text-neutral-500' size={35} />
    },
    {
      title: dictionary.product.comingSoonFeatures.tab,
      description: dictionary.product.comingSoonFeatures.tabDesc,
      header: (
        <div className='flex h-full w-full flex-grow'>
          <Image
            src={LecoleTab}
            alt='Tab Tab'
            className='h-full w-full mask-radial-from-40% mask-radial-to-100% mask-radial-at-top-left object-cover object-left'
          />
        </div>
      ),
      className: 'md:col-span-2',
      icon: <IconArrowRightBar className='text-neutral-500' size={35} />
    }
  ];

  return (
    <BentoGrid className='mx-auto max-w-7xl md:auto-rows-[30rem]'>
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
