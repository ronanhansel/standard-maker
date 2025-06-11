'use client';

import { useState } from 'react';
import type { DictionaryType } from '@/lib/types';
import { cn } from '@/lib/utils';
import LecoleControlDialogueSVG from '@/public/images/features/lecole_control_dialogue.svg';
import ExcalidrawSVG from '@/public/images/interface/excalidraw.svg';
import FolderInterfaceSVG from '@/public/images/interface/file_list.svg';
import TrafficLightGrayScaleSVG from '@/public/images/interface/traffic_lights_gray_scale.svg';
import TrafficLightSVG from '@/public/images/interface/traffic_lights.svg';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { Cover } from '../ui/cover';

export const FastestNoteTakingApp = ({ dictionary }: { dictionary: DictionaryType }) => {
  return (
    <div className='w-full bg-gradient-to-b from-neutral-100/5 via-neutral-900/90 to-transparent py-20 lg:pt-40'>
      <TruelyFast dictionary={dictionary} />
      <LecoleControlDialogue dictionary={dictionary} />
    </div>
  );
};

const LecoleControlDialogue = ({ dictionary }: { dictionary: DictionaryType }) => {
  return (
    <div className='container mx-auto px-4 pt-20 md:px-10'>
      <div className='mx-auto flex max-w-7xl flex-col gap-8'>
        <div className='flex flex-col items-start gap-4'>
          {/* <Badge variant="outline">{dictionary["fastest"].tools}</Badge> */}
          <div className='flex flex-col gap-2'>
            <h2 className='font-regular max-w-2xl text-left tracking-tighter'>
              {dictionary.fastest.wideRangeOfTools} <br />
              {dictionary.fastest.toExpressYourIdeas}
            </h2>
            <p className='text-muted-foreground max-w-xl text-left leading-relaxed tracking-tight'>
              {dictionary.fastest.goalsWithLeastAmountOfClicks}
            </p>
          </div>
        </div>

        <div className='relative mx-auto my-16 w-full -rotate-x-25 -rotate-y-15 -rotate-z-10 md:w-full'>
          <motion.div
            initial={{
              y: 0,
              x: 0
            }}
            whileHover={{
              y: -50,
              x: 50
            }}
            className='absolute top-1/4 left-1/4 z-[999] rounded-3xl shadow-lg backdrop-blur-sm'
          >
            <Image
              src={LecoleControlDialogueSVG}
              alt='Lecole Control Dialogue'
              className='rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.1)]'
            />
          </motion.div>
          <Image
            src={ExcalidrawSVG}
            alt='Excalidraw Interface'
            className='mask-r-from-70% mask-b-from-30% mask-radial-at-top-left object-contain'
          />
        </div>

        <div className='mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 md:grid-cols-3'>
          <div className='bg-muted/10 rounded-xl border border-neutral-200/10 p-6 backdrop-blur-sm transition-all duration-300 hover:border-neutral-200/20 hover:shadow-md'>
            <h3 className='mb-2 text-xl font-semibold tracking-tight'>
              {dictionary['fastest'].excalidraw}
            </h3>
            <p className='text-muted-foreground'>{dictionary['fastest'].excalidrawDesc}</p>
          </div>
          <div className='bg-muted/10 rounded-xl border border-neutral-200/10 p-6 backdrop-blur-sm transition-all duration-300 hover:border-neutral-200/20 hover:shadow-md'>
            <h3 className='mb-2 text-xl font-semibold tracking-tight'>
              {dictionary['fastest'].mermaidDiagrams}
            </h3>
            <p className='text-muted-foreground'>{dictionary['fastest'].mermaidDiagramsDesc}</p>
          </div>
          <div className='bg-muted/10 rounded-xl border border-neutral-200/10 p-6 backdrop-blur-sm transition-all duration-300 hover:border-neutral-200/20 hover:shadow-md'>
            <h3 className='mb-2 text-xl font-semibold tracking-tight'>
              {dictionary['fastest'].customFiles}
            </h3>
            <p className='text-muted-foreground'>{dictionary['fastest'].customFilesDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TruelyFast = ({ dictionary }: { dictionary: DictionaryType }) => {
  const [isHoveredImage, setIsHoveredImage] = useState(false);

  const fadeUpAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className='container mx-auto px-4 md:px-10'>
      <motion.div
        initial='hidden'
        animate='visible'
        variants={fadeUpAnimation}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className='flex flex-col items-center justify-center'
      >
        <h1 className='relative z-20 mx-auto max-w-3xl bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 bg-clip-text py-6 text-center text-3xl leading-9 font-semibold text-transparent sm:text-4xl sm:leading-10 md:text-5xl lg:text-6xl lg:leading-20 dark:from-neutral-800 dark:via-white dark:to-white'>
          {dictionary['fastest'].headlinePart1}{' '}
          <div className='mx-2 inline-block -rotate-4'>
            <Cover>{dictionary['fastest'].fastest}</Cover>
          </div>{' '}
          {dictionary['fastest'].headlinePart2}
          <br />
          {dictionary['fastest'].headlinePart3}
        </h1>
      </motion.div>

      <div className='mt-12 mb-8 sm:mt-16 sm:mb-10'>
        <div className='flex flex-col items-start justify-between gap-6 min-[768px]:gap-16 sm:gap-8 md:flex-row'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className='w-full space-y-6 rounded-xl border border-neutral-200/10 bg-black/5 p-4 shadow-inner backdrop-blur-sm sm:space-y-8 sm:p-6 md:w-2/5 md:p-8 dark:bg-white/5'
          >
            <div className='relative'>
              <div className='absolute top-0 -left-3 h-full w-1 rounded-full bg-gradient-to-b from-blue-500 to-purple-500'></div>
              <p className='text-muted-foreground text-base leading-relaxed sm:text-lg md:text-xl'>
                {dictionary['fastest'].taglinePart1}{' '}
                <span className='bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text font-medium text-transparent'>
                  {dictionary['fastest'].taglinePart2}
                </span>
              </p>
            </div>

            <ul className='text-muted-foreground space-y-4 sm:space-y-6'>
              <li className='group flex flex-col gap-2 transition-all duration-300 hover:translate-x-1'>
                <div className='flex items-center gap-2'>
                  <div className='flex h-7 w-7 items-center justify-center rounded-full bg-blue-500/10 sm:h-8 sm:w-8'>
                    <span className='text-blue-400'>⚡</span>
                  </div>
                  <p className='text-base font-semibold text-white transition-colors group-hover:text-blue-400 sm:text-lg'>
                    Prefetching
                  </p>
                </div>
                <p className='pl-8 text-sm sm:pl-10 sm:text-base'>
                  {dictionary['fastest'].prefetching}
                </p>
              </li>
              <li className='group flex flex-col gap-2 transition-all duration-300 hover:translate-x-1'>
                <div className='flex items-center gap-2'>
                  <div className='flex h-7 w-7 items-center justify-center rounded-full bg-purple-500/10 sm:h-8 sm:w-8'>
                    <span className='text-purple-400'>💾</span>
                  </div>
                  <p className='text-base font-semibold text-white transition-colors group-hover:text-purple-400 sm:text-lg'>
                    Caching
                  </p>
                </div>
                <p className='pl-8 text-sm sm:pl-10 sm:text-base'>
                  {dictionary['fastest'].caching}
                </p>
              </li>
              <li className='group flex flex-col gap-2 transition-all duration-300 hover:translate-x-1'>
                <div className='flex items-center gap-2'>
                  <div className='flex h-7 w-7 items-center justify-center rounded-full bg-green-500/10 sm:h-8 sm:w-8'>
                    <span className='text-green-400'>🔄</span>
                  </div>
                  <p className='text-base font-semibold text-white transition-colors group-hover:text-green-400 sm:text-lg'>
                    {dictionary.fastest.localFirstApproach}
                  </p>
                </div>
                <p className='pl-8 text-sm sm:pl-10 sm:text-base'>
                  {dictionary.fastest.localFirstApproachDesc}
                </p>
              </li>
            </ul>

            <div className='mt-4 border-t border-neutral-800/30 pt-3 sm:mt-6 sm:pt-4'>
              <div className='flex items-center gap-2 text-xs text-neutral-400 sm:text-sm'>
                <span className='inline-block h-2 w-2 animate-pulse rounded-full bg-green-500'></span>
                <span>{dictionary.fastest.optimisedForSpeed}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            onMouseEnter={() => setIsHoveredImage(true)}
            onMouseLeave={() => setIsHoveredImage(false)}
            className={cn(
              'w-full border md:w-3/5',
              'flex flex-col gap-2 overflow-hidden rounded-xl object-cover px-2 shadow-lg',
              'mask-r-from-70% mask-b-from-30% mask-radial-from-80% mask-radial-to-95% mask-radial-at-top-left'
            )}
          >
            <motion.div className='w-full'>
              {isHoveredImage ? (
                <div className='mx-2 mt-2 sm:mx-4 sm:mt-4'>
                  <Image src={TrafficLightSVG} alt='Traffic Light' />
                </div>
              ) : (
                <div className='mx-2 mt-2 sm:mx-4 sm:mt-4'>
                  <Image src={TrafficLightGrayScaleSVG} alt='Traffic Light' />
                </div>
              )}

              <div className='mx-2 mt-2 flex w-[30rem] items-center justify-start gap-1 overflow-x-visible rounded-md bg-black/20 p-1.5 backdrop-blur-sm sm:mx-4 sm:gap-2 sm:p-2'>
                <p className='font-mono text-xs whitespace-nowrap text-white/80 sm:text-sm lg:text-base'>
                  Prefetching
                </p>
                |
                <p className='font-mono text-xs whitespace-nowrap text-white/80 sm:text-sm lg:text-base'>
                  Caching
                </p>
                |
                <p className='font-mono text-xs whitespace-nowrap text-white/80 sm:text-sm lg:text-base'>
                  Total load time: 50ms ⚡
                </p>
              </div>
              <Image
                src={FolderInterfaceSVG}
                alt='Folder Interface'
                className='h-auto w-full rounded-b-lg'
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
