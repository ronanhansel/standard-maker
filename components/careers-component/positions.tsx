import { Check } from 'lucide-react';
import Link from 'next/link';

import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

export const Positions = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h2>Open Positions</h2>
      <div className='container mx-auto mt-6 px-4 sm:px-6 md:px-10'>
        <div className='container grid grid-cols-1 items-center gap-4 rounded-lg border p-4 sm:gap-6 sm:p-6 md:gap-8 md:p-8 lg:grid-cols-2'>
          {/* Title block on the left */}
          <div className='flex flex-col gap-3 sm:gap-4'>
            <div>
              <Badge variant='outline'>Position</Badge>
            </div>
            <div className='flex flex-col gap-1.5 sm:gap-2'>
              <h2 className='font-regular max-w-xl text-left text-2xl tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl'>
                Machine Learning Researcher
              </h2>
              <p className='text-muted-foreground max-w-xl text-left text-base leading-relaxed tracking-tight sm:text-lg'>
                We are assembling a group of machine learning researchers to work on cutting-edge
                TTS for Vietnamese language.
              </p>
            </div>
          </div>
          {/* Text block on the right */}
          <div className='order-2 flex flex-col gap-6 sm:gap-8 md:gap-10 lg:order-none'>
            <div className='grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:pl-4 sm:lg:pl-6'>
              <div className='flex flex-row items-start gap-4 sm:gap-6'>
                <Check className='text-primary mt-1.5 h-4 w-4 flex-shrink-0 sm:mt-2' />
                <div className='flex flex-col gap-1'>
                  <p className='text-sm sm:text-base'>Hands-on experience</p>
                  <p className='text-muted-foreground text-sm sm:text-base'>
                    Work on cutting-edge TTS for Vietnamese language.
                  </p>
                </div>
              </div>
              <div className='flex flex-row items-start gap-4 sm:gap-6'>
                <Check className='text-primary mt-1.5 h-4 w-4 flex-shrink-0 sm:mt-2' />
                <div className='flex flex-col gap-1'>
                  <p className='text-sm sm:text-base'>Large allocation of infrastructure</p>
                  <p className='text-muted-foreground text-sm sm:text-base'>
                    Ample resources for you to work on your research.
                  </p>
                </div>
              </div>
              <div className='flex flex-row items-start gap-4 sm:gap-6'>
                <Check className='text-primary mt-1.5 h-4 w-4 flex-shrink-0 sm:mt-2' />
                <div className='flex flex-col gap-1'>
                  <p className='text-sm sm:text-base'>Guidance from leading experts</p>
                  <p className='text-muted-foreground text-sm sm:text-base'>
                    Get guidance from leading experts, professors in the field of machine learning.
                  </p>
                </div>
              </div>
              <div className='flex flex-row items-start gap-4 sm:gap-6'>
                <Check className='text-primary mt-1.5 h-4 w-4 flex-shrink-0 sm:mt-2' />
                <div className='flex flex-col gap-1'>
                  <p className='text-sm sm:text-base'>Prospect for publication</p>
                  <p className='text-muted-foreground text-sm sm:text-base'>
                    Get the opportunity to publish your research in top-tier conferences and
                    journals.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Link
            href='mailto:contact@lecole.tech?subject=%5BLEC-POSITION%5D%3A%20Apply%20for%20Machine%20Learning%20Researcher%20position'
            target='_blank'
          >
            <Button variant='outline' className='w-fit'>
              Send us your CV
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
