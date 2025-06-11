import { Badge } from '@/components/ui/badge';
import type { DictionaryType } from '@/lib/types';
import { cn } from '@/lib/utils';
import forResearcherImage from '@/public/images/features/research_websites.svg';
import { Check } from 'lucide-react';
import Image from 'next/image';

export const Feature4 = ({ dictionary }: { dictionary: DictionaryType }) => {
  return (
    <div className='w-full'>
      <div className='container mx-auto px-4 sm:px-6 md:px-10'>
        <div className='container grid grid-cols-1 items-center gap-4 rounded-lg border p-4 sm:gap-6 sm:p-6 md:gap-8 md:p-8 lg:grid-cols-2'>
          {/* Image block on the left */}
          <div className={cn('order-1 aspect-square overflow-hidden rounded-md lg:order-none')}>
            <Image
              src={forResearcherImage}
              alt='For Researcher'
              className={cn(
                'rotate-10',
                'h-full w-full object-cover',
                'scale-125 mask-radial-from-10% mask-radial-to-90% mask-radial-at-center sm:scale-150'
              )}
              width={500}
              height={500}
            />
          </div>
          {/* Text block on the right */}
          <div className='order-2 flex flex-col gap-6 sm:gap-8 md:gap-10 lg:order-none'>
            <div className='flex flex-col gap-3 sm:gap-4'>
              <div>
                <Badge variant='outline'>{dictionary['researcher'].platform}</Badge>
              </div>
              <div className='flex flex-col gap-1.5 sm:gap-2'>
                <h2 className='font-regular max-w-xl text-left text-2xl tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl'>
                  {dictionary['researcher'].forResearchers}
                </h2>
                <p className='text-muted-foreground max-w-xl text-left text-base leading-relaxed tracking-tight sm:text-lg'>
                  {dictionary['researcher'].forResearchersDesc}
                </p>
              </div>
            </div>
            <div className='grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:pl-4 sm:lg:pl-6'>
              <div className='flex flex-row items-start gap-4 sm:gap-6'>
                <Check className='text-primary mt-1.5 h-4 w-4 flex-shrink-0 sm:mt-2' />
                <div className='flex flex-col gap-1'>
                  <p className='text-sm sm:text-base'>
                    {dictionary['researcher'].literatureConnections}
                  </p>
                  <p className='text-muted-foreground text-sm sm:text-base'>
                    {dictionary['researcher'].literatureConnectionsDesc}
                  </p>
                </div>
              </div>
              <div className='flex flex-row items-start gap-4 sm:gap-6'>
                <Check className='text-primary mt-1.5 h-4 w-4 flex-shrink-0 sm:mt-2' />
                <div className='flex flex-col gap-1'>
                  <p className='text-sm sm:text-base'>
                    {dictionary['researcher'].advancedOrganization}
                  </p>
                  <p className='text-muted-foreground text-sm sm:text-base'>
                    {dictionary['researcher'].advancedOrganizationDesc}
                  </p>
                </div>
              </div>
              <div className='flex flex-row items-start gap-4 sm:gap-6'>
                <Check className='text-primary mt-1.5 h-4 w-4 flex-shrink-0 sm:mt-2' />
                <div className='flex flex-col gap-1'>
                  <p className='text-sm sm:text-base'>
                    {dictionary['researcher'].insightGeneration}
                  </p>
                  <p className='text-muted-foreground text-sm sm:text-base'>
                    {dictionary['researcher'].insightGenerationDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
