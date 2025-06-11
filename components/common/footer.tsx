'use client';

import type { DictionaryType } from '@/lib/types';
import Link from 'next/link';

import { LanguageSwitcher } from './language-switcher';

export const Footer1 = ({ dictionary }: { dictionary: DictionaryType }) => {
  const navigationItems = [
    {
      title: dictionary['footer'].home,
      href: '/'
    },
    {
      title: dictionary['footer'].features,
      items: [
        // {
        //   title: dictionary['footer'].companion,
        //   href: '/companion'
        // },
        {
          title: dictionary['footer'].workspace,
          href: '/workspace'
        },
        {
          title: dictionary['footer'].calendar,
          href: '/calendar'
        }
      ]
    },
    {
      title: dictionary['footer'].company,
      items: [
        {
          title: dictionary['footer'].aboutUs,
          href: '/about'
        },
        {
          title: dictionary['footer'].contactUs,
          href: '/contact'
        }
      ]
    },
    {
      title: dictionary['footer'].followUs,
      items: [
        {
          title: 'Threads',
          href: 'https://www.threads.com/@lecole.tech'
        }
      ]
    }
  ];

  return (
    <div className='bg-foreground text-background w-full px-4 py-20'>
      <div className='container mx-auto'>
        <div className='grid items-start gap-10 lg:grid-cols-2'>
          <div className='flex flex-col items-start gap-8'>
            <div className='flex flex-col gap-2'>
              <h2 className='font-regular max-w-xl text-left font-[Horizon] text-3xl font-bold tracking-tighter md:text-5xl'>
                LECOLE™
              </h2>
              <p className='text-background/75 max-w-lg text-left text-lg leading-relaxed tracking-tight'>
                {dictionary['footer'].tagline}
              </p>
            </div>
            <div className='flex flex-row gap-20'>
              <div className='text-background/75 flex max-w-lg gap-4 text-left text-sm leading-relaxed tracking-tight'>
                <Link href={`/terms-of-service`}>{dictionary['common'].termsOfService}</Link>
                <Link href={`/privacy-policy`}>{dictionary['common'].privacyPolicy}</Link>
              </div>
            </div>
            <span className='flex items-center gap-2'>
              <div>{dictionary['footer'].language}: </div>
              <LanguageSwitcher variant='footer' showLanguage={true} />
            </span>
          </div>
          <div className='grid items-start gap-10 lg:grid-cols-4'>
            {navigationItems.map((item) => (
              <div key={item.title} className='flex flex-col items-start gap-1 text-base'>
                <div className='flex flex-col gap-2'>
                  {item.href ? (
                    <Link href={item.href} className='flex items-center justify-between'>
                      <span className='text-xl'>{item.title}</span>
                    </Link>
                  ) : (
                    <p className='text-xl'>{item.title}</p>
                  )}
                  {item.items &&
                    item.items.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className='flex items-center justify-between'
                      >
                        <span className='text-background/75'>{subItem.title}</span>
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='mt-8 flex justify-end'></div>
      </div>
    </div>
  );
};
