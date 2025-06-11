import { Badge } from '@/components/ui/badge';
import type { DictionaryType } from '@/lib/types';
import { cn } from '@/lib/utils';
import satChatInput from '@/public/images/features/sat_chat_dialogue.svg';
import forStudentImage from '@/public/images/features/sat_score_report.svg';
import { Check } from 'lucide-react';
import Image from 'next/image';

export const Feature1 = ({ dictionary }: { dictionary: DictionaryType }) => {
  return (
    <div className='w-full'>
      <div className='container mx-auto px-4 sm:px-6 md:px-10'>
        <div className='container grid grid-cols-1 items-center gap-4 rounded-lg border p-4 sm:gap-6 sm:p-6 md:gap-8 md:p-8 lg:grid-cols-2'>
          <div className='flex flex-col gap-6 sm:gap-8 md:gap-10'>
            <div className='flex flex-col gap-3 sm:gap-4'>
              <div>
                <Badge variant='outline'>{dictionary['k12'].platform}</Badge>
              </div>
              <div className='flex flex-col gap-1.5 sm:gap-2'>
                <h2 className='font-regular max-w-xl text-left text-2xl tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl'>
                  {dictionary['k12'].forStudents}
                </h2>
                <p className='text-muted-foreground max-w-xl text-left text-base leading-relaxed tracking-tight sm:text-lg'>
                  {dictionary['k12'].forStudentsDesc}
                </p>
              </div>
            </div>
            <div className='grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:pl-4 sm:lg:pl-6'>
              <div className='flex flex-row items-start gap-4 sm:gap-6'>
                <Check className='text-primary mt-1.5 h-4 w-4 flex-shrink-0 sm:mt-2' />
                <div className='flex flex-col gap-1'>
                  <p className='text-sm sm:text-base'>{dictionary['k12'].simplifiedNoteTaking}</p>
                  <p className='text-muted-foreground text-sm sm:text-base'>
                    {dictionary['k12'].simplifiedNoteTakingDesc}
                  </p>
                </div>
              </div>
              <div className='flex flex-row items-start gap-4 sm:gap-6'>
                <Check className='text-primary mt-1.5 h-4 w-4 flex-shrink-0 sm:mt-2' />
                <div className='flex flex-col gap-1'>
                  <p className='text-sm sm:text-base'>{dictionary['k12'].conceptConnections}</p>
                  <p className='text-muted-foreground text-sm sm:text-base'>
                    {dictionary['k12'].conceptConnectionsDesc}
                  </p>
                </div>
              </div>
              <div className='flex flex-row items-start gap-4 sm:gap-6'>
                <Check className='text-primary mt-1.5 h-4 w-4 flex-shrink-0 sm:mt-2' />
                <div className='flex flex-col gap-1'>
                  <p className='text-sm sm:text-base'>{dictionary['k12'].studyAssistance}</p>
                  <p className='text-muted-foreground text-sm sm:text-base'>
                    {dictionary['k12'].studyAssistanceDesc}
                  </p>
                </div>
              </div>
              <div className='flex flex-row items-start gap-4 sm:gap-6'>
                <Check className='text-primary mt-1.5 h-4 w-4 flex-shrink-0 sm:mt-2' />
                <div className='flex flex-col gap-1'>
                  <p className='text-sm sm:text-base'>{dictionary['k12'].satIntegration}</p>
                  <p className='text-muted-foreground text-sm sm:text-base'>
                    {dictionary['k12'].satIntegrationDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={cn(
              'flex aspect-square h-[300px] w-full items-center justify-center overflow-hidden rounded-md sm:h-[400px] md:h-[500px] lg:h-[600px]'
            )}
          >
            <div className='relative h-full w-full'>
              <div className='mx-auto max-w-7xl px-4 sm:px-6 md:px-10'></div>
              <Image
                src={forStudentImage}
                alt='For Student'
                className={cn(
                  'h-full w-full object-cover',
                  'mask-r-from-70% mask-b-from-30% mask-radial-from-80% mask-radial-to-95% mask-radial-at-top-left'
                )}
              />
              <Image
                src={satChatInput}
                alt='For Student'
                className='absolute top-3 left-0 z-[20] aspect-[463/179] w-[300px] rounded-[15px] bg-white/40 backdrop-blur-sm sm:top-5 sm:w-[300px] sm:rounded-[25px] md:w-[500px]'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
