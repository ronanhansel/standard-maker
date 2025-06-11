'use client';

import { Badge } from '@/components/ui/badge';
import type { DictionaryType } from '@/lib/types';
import Workspace from '@/public/homepage-features/1.png';
import SmartEditing from '@/public/homepage-features/2.png';
import MultimodalCapture from '@/public/homepage-features/3.png';
import KnowledgeGraph from '@/public/homepage-features/4.png';
import AdaptiveStudyPlans from '@/public/homepage-features/5.png';
import InstantCitations from '@/public/homepage-features/6.png';
import CrossDeviceSync from '@/public/homepage-features/7.png';
import AgenticCompanion from '@/public/homepage-features/8.png';
import {
  Bot,
  CalendarCheck,
  Cloud,
  MicVocal,
  Network,
  NotebookText,
  Quote,
  Sparkles
} from 'lucide-react';
import Image from 'next/image';

export const Feature7 = ({ dictionary }: { dictionary: DictionaryType }) => {
  return (
    <div className='w-full px-4'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-10'>
          <div className='flex flex-col items-start gap-4'>
            <div>
              <Badge>{dictionary['features'].platform}</Badge>
            </div>
            <div className='flex flex-col gap-2'>
              <h2 className='font-regular max-w-2xl text-left text-3xl tracking-tighter md:text-5xl'>
                {dictionary['features'].intelligentFeatures}
              </h2>
              <p className='text-muted-foreground max-w-xl text-left leading-relaxed tracking-tight lg:max-w-lg'>
                {dictionary['features'].featuresDescription}
              </p>
            </div>
          </div>
          <div className='flex flex-col gap-8 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3 xl:grid-cols-4'>
            <div className='bg-muted/50 relative flex aspect-square h-full w-full flex-col justify-between overflow-hidden rounded-md p-6 lg:col-span-2 lg:row-span-2'>
              <NotebookText className='relative z-20 h-8 w-8 stroke-2' />
              <Image
                src={Workspace}
                alt='Workspace'
                className='absolute inset-0 z-0 rounded-md object-cover'
                priority
                quality={80}
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                width={1050}
                height={1050}
              />
              <div className='from-background via-background/30 absolute inset-0 z-10 rounded-md bg-gradient-to-t to-transparent'></div>
              <div className='relative z-20 mt-auto flex w-full flex-col'>
                <h3 className='text-xl tracking-tight'>
                  {dictionary['features'].contextAwareWorkspace}
                </h3>
                <p className='text-muted-foreground max-w-xs text-base'>
                  {dictionary['features'].contextAwareDesc}
                </p>
              </div>
            </div>

            <div className='bg-muted/50 relative flex aspect-square h-full flex-col justify-between overflow-hidden rounded-md p-6'>
              <Sparkles className='relative z-20 h-8 w-8 stroke-2' />
              <Image
                src={SmartEditing}
                alt='Smart Editing'
                className='absolute inset-0 z-0 rounded-md object-cover'
                quality={80}
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                width={1050}
                height={1050}
              />
              <div className='from-background via-background/30 absolute inset-0 z-10 rounded-md bg-gradient-to-t to-transparent'></div>
              <div className='relative z-20 mt-auto flex w-full flex-col'>
                <h3 className='text-xl tracking-tight'>
                  {dictionary['features'].realTimeSmartEditing}
                </h3>
                <p className='text-muted-foreground max-w-xs text-base'>
                  {dictionary['features'].realTimeSmartEditingDesc}
                </p>
              </div>
            </div>

            <div className='bg-muted/50 relative flex aspect-square h-full flex-col justify-between overflow-hidden rounded-md p-6'>
              <MicVocal className='relative z-20 h-8 w-8 stroke-2' />
              <Image
                src={MultimodalCapture}
                alt='Multimodal Capture'
                className='absolute inset-0 z-0 rounded-md object-cover'
                quality={80}
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                width={1050}
                height={1050}
              />
              <div className='from-background via-background/30 absolute inset-0 z-10 rounded-md bg-gradient-to-t to-transparent'></div>
              <div className='relative z-20 mt-auto flex w-full flex-col'>
                <h3 className='text-xl tracking-tight'>
                  {dictionary['features'].multimodalCapture}
                </h3>
                <p className='text-muted-foreground max-w-xs text-base'>
                  {dictionary['features'].multimodalCaptureDesc}
                </p>
              </div>
            </div>

            <div className='bg-muted/50 relative flex aspect-square h-full flex-col justify-between overflow-hidden rounded-md p-6'>
              <Network className='relative z-20 h-8 w-8 stroke-2' />
              <Image
                src={KnowledgeGraph}
                alt='Knowledge Graph View'
                className='absolute inset-0 z-0 rounded-md object-cover'
                quality={80}
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                width={1050}
                height={1050}
              />
              <div className='from-background via-background/30 absolute inset-0 z-10 rounded-md bg-gradient-to-t to-transparent'></div>
              <div className='relative z-20 mt-auto flex w-full flex-col'>
                <h3 className='text-xl tracking-tight'>
                  {dictionary['features'].knowledgeGraphView}
                </h3>
                <p className='text-muted-foreground max-w-xs text-base'>
                  {dictionary['features'].knowledgeGraphViewDesc}
                </p>
              </div>
            </div>

            <div className='bg-muted/50 relative flex aspect-square h-full flex-col justify-between overflow-hidden rounded-md p-6'>
              <CalendarCheck className='relative z-20 h-8 w-8 stroke-2' />
              <Image
                src={AdaptiveStudyPlans}
                alt='Adaptive Study Plans'
                className='absolute inset-0 z-0 rounded-md object-cover'
                quality={80}
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                width={1050}
                height={1050}
              />
              <div className='from-background via-background/30 absolute inset-0 z-10 rounded-md bg-gradient-to-t to-transparent'></div>
              <div className='relative z-20 mt-auto flex w-full flex-col'>
                <h3 className='text-xl tracking-tight'>
                  {dictionary['features'].adaptiveStudyPlans}
                </h3>
                <p className='text-muted-foreground max-w-xs text-base'>
                  {dictionary['features'].adaptiveStudyPlansDesc}
                </p>
              </div>
            </div>

            <div className='bg-muted/50 relative flex aspect-square h-full flex-col justify-between overflow-hidden rounded-md p-6'>
              <Quote className='relative z-20 h-8 w-8 stroke-2' />
              <Image
                src={InstantCitations}
                alt='Instant Citations'
                className='absolute inset-0 z-0 rounded-md object-cover'
                quality={80}
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                width={1050}
                height={1050}
              />
              <div className='from-background via-background/30 absolute inset-0 z-10 rounded-md bg-gradient-to-t to-transparent'></div>
              <div className='relative z-20 mt-auto flex w-full flex-col'>
                <h3 className='text-xl tracking-tight'>
                  {dictionary['features'].instantCitations}
                </h3>
                <p className='text-muted-foreground max-w-xs text-base'>
                  {dictionary['features'].instantCitationsDesc}
                </p>
              </div>
            </div>

            <div className='bg-muted/50 relative flex aspect-square h-full flex-col justify-between overflow-hidden rounded-md p-6'>
              <Cloud className='relative z-20 h-8 w-8 stroke-2' />
              <Image
                src={CrossDeviceSync}
                alt='Cross Device Sync'
                className='absolute inset-0 z-0 rounded-md object-cover'
                quality={80}
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                width={1050}
                height={1050}
              />
              <div className='from-background via-background/30 absolute inset-0 z-10 rounded-md bg-gradient-to-t to-transparent'></div>
              <div className='relative z-20 mt-auto flex w-full flex-col'>
                <h3 className='text-xl tracking-tight'>{dictionary['features'].crossDeviceSync}</h3>
                <p className='text-muted-foreground max-w-xs text-base'>
                  {dictionary['features'].crossDeviceSyncDesc}
                </p>
              </div>
            </div>

            <div className='bg-muted/50 relative flex aspect-square h-full flex-col justify-between overflow-hidden rounded-md p-6 lg:col-span-2 lg:aspect-auto'>
              <Bot className='relative z-20 h-8 w-8 stroke-2' />
              <Image
                src={AgenticCompanion}
                alt='Agentic Learning Companion'
                className='absolute inset-0 z-0 rounded-md object-cover'
                quality={80}
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                width={1050}
                height={1050}
              />
              <div className='from-background via-background/30 absolute inset-0 z-10 rounded-md bg-gradient-to-t to-transparent'></div>
              <div className='relative z-20 mt-auto flex w-full flex-col'>
                <h3 className='text-xl tracking-tight'>
                  {dictionary['features'].agenticLearningCompanion}
                </h3>
                <p className='text-muted-foreground max-w-xs text-base'>
                  {dictionary['features'].agenticLearningCompanionDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
