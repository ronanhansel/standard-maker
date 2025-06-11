'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

import LogoIconWhite from '../public/icons/logo-icon-white.svg';

export default function NotFound() {
  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center gap-2'>
      <div className='flex flex-col items-center gap-4'>
        <h1 className='text-[200px] font-bold'>404</h1>
        <div className='animate-fade-in-not-found bg-background animate-fadeIn z-30 flex items-center justify-center rounded-4xl shadow-[inset_0_-5px_10px_rgba(255,255,255,0.1)]'>
          <Image src={LogoIconWhite} alt='Logo' className='aspect-square w-40 object-contain' />
        </div>
        This page does not exist
        <Link href='/'>
          <Button variant='outline'>Back to Home</Button>
        </Link>
      </div>
    </div>
  );
}
