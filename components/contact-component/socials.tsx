import type { ReactNode } from 'react';
import type { DictionaryType } from '@/lib/types';
import Link from 'next/link';

import { Icons } from '../common/icon';

type SocialButtonProps = {
  icon: ReactNode;
  label: string;
  href?: string;
};

const SocialButton = ({ icon, label, href }: SocialButtonProps) => {
  const content = (
    <div className='mx-auto my-4 flex flex-col items-center justify-center gap-2 text-center'>
      <div className='aspect-square h-10'>{icon}</div>
      {label}
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        target='_blank'
        className='hover:bg-muted/50 rounded-md transition-colors duration-200'
      >
        {content}
      </Link>
    );
  }

  return content;
};

export const Socials = ({ dictionary }: { dictionary: DictionaryType }) => {
  return (
    <div className='z-20 w-full'>
      <div className='text-muted-foreground container mx-auto my-4 max-w-3xl px-4 text-center text-base sm:px-6 md:px-10'>
        Currently, the best way to reach us is via Threads, if you have a feature request, please
        create a discussion on GitHub. For symmetry, we added Discord, but it's not yet active.
      </div>
      <div className='container mx-auto max-w-2xl px-4 sm:px-6 md:px-10'>
        <div className='grid grid-cols-2 flex-wrap place-content-center items-center gap-6 self-center md:grid-cols-3'>
          <SocialButton
            href='https://www.threads.com/@lecole.tech'
            icon={<Icons.threads />}
            label='Threads'
          />
          <SocialButton
            icon={<Icons.github />}
            label='GitHub'
            href='https://github.com/LECOLE-TECH'
          />
          <SocialButton icon={<Icons.discord fill='#fff' />} label='Coming soon' />
        </div>
      </div>
    </div>
  );
};
