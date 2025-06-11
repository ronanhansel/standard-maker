'use client';

import { trackCTAClick } from '@/components/posthog-provider';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { DictionaryType } from '@/lib/types';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';

export const CTA2 = ({ dictionary }: { dictionary: DictionaryType }) => {
  return (
    <div className='bg-muted w-full px-4 py-20 lg:py-40'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center gap-4 py-14 text-center'>
          <div>
            <Badge>{dictionary['cta'].getStarted}</Badge>
          </div>
          <div className='flex flex-col gap-2'>
            <h3 className='font-regular max-w-xl text-3xl tracking-tighter md:text-5xl'>
              {dictionary['cta'].startThinkingFreely}
            </h3>
            <p className='text-muted-foreground max-w-xl text-lg leading-relaxed tracking-tight'>
              {dictionary['cta'].joinThousands}
            </p>
          </div>
          <div className='flex flex-row gap-4'>
            <Button
              className='gap-4'
              variant='outline'
              onClick={() => {
                // Track CTA click
                trackCTAClick('Get launch notice', 'cta_section');
                const emailForm = document.getElementById('email-form');
                if (emailForm) {
                  emailForm.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'center'
                  });
                }
              }}
            >
              {dictionary['cta'].cta}
              <MoveRight className='h-4 w-4' />
            </Button>
            <Link href='/product'>
              <Button
                className='gap-4'
                onClick={() => {
                  // Track CTA click
                  trackCTAClick('See How It Works', 'cta_section');
                }}
              >
                {dictionary['cta'].seeHowItWorks}
                <MoveRight className='h-4 w-4' />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
