'use client';

import type { DictionaryType } from '@/lib/types';
import { cn } from '@/lib/utils';
import LecoleCollabSVG from '@/public/images/features/lecole_collab.svg';
import FolderInterfaceSVG from '@/public/images/interface/folder_interface.svg';
import CrossPlatformSVG from '@/public/images/misc/cross_platform.svg';
import WindowSVG from '@/public/images/misc/window.svg';
import {
  IconBrandGit,
  IconCloudComputing,
  IconDeviceLaptop,
  IconDeviceMobile,
  IconDeviceTablet,
  IconUsers
} from '@tabler/icons-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { Badge } from '../ui/badge';
import { Cover } from '../ui/cover';

export const WorkspaceFeatures = ({ dictionary }: { dictionary: DictionaryType }) => {
  return (
    <div className='w-full bg-gradient-to-b from-neutral-700/20 via-neutral-950 to-transparent py-20 lg:py-40'>
      <WorkspaceIntro dictionary={dictionary} />
      <CollaborationFeatures dictionary={dictionary} />
      <DeviceSupport dictionary={dictionary} />
    </div>
  );
};

const WorkspaceIntro = ({ dictionary }: { dictionary: DictionaryType }) => {
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
        <Badge variant='outline' className='mb-6'>
          {dictionary['workspace'].title}
        </Badge>

        <h1 className='relative z-20 mx-auto max-w-3xl bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 bg-clip-text py-6 text-center text-4xl leading-10 font-semibold text-transparent md:text-5xl lg:text-6xl lg:leading-20 dark:from-neutral-800 dark:via-white dark:to-white'>
          {dictionary['workspace'].headline.split(' workspace ')[0]}{' '}
          <div className='mx-2 inline-block -rotate-4'>
            <Cover>workspace</Cover>
          </div>{' '}
          {dictionary['workspace'].headline.split(' workspace ')[1]}
        </h1>
      </motion.div>

      <div className='mt-16 mb-10'>
        <div className='flex flex-col items-start justify-between gap-8 md:flex-row md:gap-16'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className='w-full space-y-8 rounded-xl border border-neutral-200/10 bg-black/5 p-6 shadow-inner backdrop-blur-sm md:w-2/5 md:p-8 dark:bg-white/5'
          >
            <div className='relative'>
              <p className='text-muted-foreground text-lg leading-relaxed md:text-xl'>
                {dictionary.workspace.tagline}{' '}
                <span className='bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text font-medium text-transparent'>
                  {dictionary.workspace.enhancesProductivity}
                </span>
              </p>
            </div>

            <ul className='text-muted-foreground space-y-6'>
              <li className='group flex flex-col gap-2 transition-all duration-300 hover:translate-x-1'>
                <div className='flex items-center gap-2'>
                  <div className='flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/10'>
                    <span className='text-blue-400'>📑</span>
                  </div>
                  <h3 className='text-lg font-semibold text-white transition-colors group-hover:text-blue-400'>
                    {dictionary.workspace.flexibleLayout}
                  </h3>
                </div>
                <p className='pl-10'>{dictionary.workspace.flexibleLayoutDesc}</p>
              </li>
              <li className='group flex flex-col gap-2 transition-all duration-300 hover:translate-x-1'>
                <div className='flex items-center gap-2'>
                  <div className='flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/10'>
                    <span className='text-purple-400'>🔄</span>
                  </div>
                  <h3 className='text-lg font-semibold text-white transition-colors group-hover:text-purple-400'>
                    {dictionary.workspace.seamlessSync}
                  </h3>
                </div>
                <p className='pl-10'>{dictionary.workspace.seamlessSyncDesc}</p>
              </li>
              <li className='group flex flex-col gap-2 transition-all duration-300 hover:translate-x-1'>
                <div className='flex items-center gap-2'>
                  <div className='flex h-8 w-8 items-center justify-center rounded-full bg-green-500/10'>
                    <span className='text-green-400'>👥</span>
                  </div>
                  <h3 className='text-lg font-semibold text-white transition-colors group-hover:text-green-400'>
                    {dictionary.workspace.realTimeCollaboration}
                  </h3>
                </div>
                <p className='pl-10'>{dictionary.workspace.realTimeCollaborationDesc}</p>
              </li>
            </ul>

            <div className='mt-6 border-t border-neutral-800/30 pt-4'>
              <div className='flex items-center gap-2 text-sm text-neutral-400'>
                <span className='inline-block h-2 w-2 animate-pulse rounded-full bg-green-500'></span>
                <span>Designed for maximum productivity</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            className={cn(
              'w-full md:w-3/5',
              'flex flex-col gap-2 overflow-hidden rounded-xl object-cover px-2 shadow-lg',
              'mask-r-from-70% mask-b-from-30% mask-radial-from-80% mask-radial-to-95% mask-radial-at-top-left'
            )}
          >
            <motion.div
              initial={{
                scale: 1
              }}
              whileHover={{
                scale: 1.02
              }}
            >
              <div className='mx-4 mt-4'>
                <Image src={WindowSVG} alt='Window Interface' className='' />
              </div>

              <div className='bg-background/40 mx-4 mt-2 -mb-4 flex w-[30rem] items-center justify-start gap-2 rounded-md p-2 backdrop-blur-xs'>
                <p className='font-mono text-base text-white/80'>Multiple tabs</p>|
                <p className='font-mono text-base text-white/80'>Split views</p>|
                <p className='font-mono text-base text-white/80'>Customizable panels</p>
              </div>
              <Image src={FolderInterfaceSVG} alt='Folder Interface' className='rounded-b-lg' />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const CollaborationFeatures = ({ dictionary }: { dictionary: DictionaryType }) => {
  return (
    <div className='container mx-auto px-4 py-20 md:px-10'>
      <div className='mx-auto flex max-w-7xl flex-col gap-8'>
        <div className='flex flex-col items-start gap-4'>
          <Badge variant='outline'>{dictionary.workspace.collaboration}</Badge>
          <div className='flex flex-col gap-2'>
            <h2 className='font-regular max-w-2xl text-left text-3xl tracking-tighter md:text-5xl'>
              {dictionary.workspace.collaborationHeadline} <br />
              {dictionary.workspace.withYourTeam}
            </h2>
            <p className='text-muted-foreground max-w-xl text-left text-lg leading-relaxed tracking-tight'>
              {dictionary.workspace.collaborationTagline}
            </p>
            <div>{dictionary.workspace.comingSoon}</div>
          </div>
        </div>

        <motion.div className='mx-auto aspect-video h-60 rounded-2xl border mask-radial-from-0% mask-radial-to-100% mask-radial-at-top-left p-4 md:h-120'>
          <Image
            src={LecoleCollabSVG}
            alt='Lecole Control Dialogue'
            className='h-full w-full object-cover object-left shadow-[0_0_15px_rgba(0,0,0,0.1)]'
          />
        </motion.div>

        <div className='mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 md:grid-cols-3'>
          <div className='bg-muted/10 rounded-xl border border-neutral-200/10 p-6 transition-all duration-300 hover:border-neutral-200/20 hover:shadow-md'>
            <div className='mb-3 flex items-center gap-2'>
              <IconUsers className='text-blue-400' size={24} />
              <h3 className='text-xl font-semibold tracking-tight'>
                {dictionary['workspace'].realTimeEditing}
              </h3>
            </div>
            <p className='text-muted-foreground'>{dictionary['workspace'].realTimeEditingDesc}</p>
          </div>
          <div className='bg-muted/10 rounded-xl border border-neutral-200/10 p-6 transition-all duration-300 hover:border-neutral-200/20 hover:shadow-md'>
            <div className='mb-3 flex items-center gap-2'>
              <IconBrandGit className='text-purple-400' size={24} />
              <h3 className='text-xl font-semibold tracking-tight'>
                {dictionary['workspace'].versionControl}
              </h3>
            </div>
            <p className='text-muted-foreground'>{dictionary['workspace'].versionControlDesc}</p>
          </div>
          <div className='bg-muted/10 rounded-xl border border-neutral-200/10 p-6 transition-all duration-300 hover:border-neutral-200/20 hover:shadow-md'>
            <div className='mb-3 flex items-center gap-2'>
              <IconCloudComputing className='text-green-400' size={24} />
              <h3 className='text-xl font-semibold tracking-tight'>
                {dictionary['workspace'].cloudIntegration}
              </h3>
            </div>
            <p className='text-muted-foreground'>{dictionary['workspace'].cloudIntegrationDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const DeviceSupport = ({ dictionary }: { dictionary: DictionaryType }) => {
  return (
    <div className='container mx-auto px-4 py-20 md:px-10'>
      <div className='mx-auto flex max-w-7xl flex-col gap-8'>
        <div className='flex flex-col items-start gap-4'>
          <Badge variant='outline'>{dictionary.workspace.crossPlatform}</Badge>
          <div className='flex flex-col gap-2'>
            <h2 className='font-regular max-w-2xl text-left text-3xl tracking-tighter md:text-5xl'>
              {dictionary.workspace.crossPlatformHeadline} <br />
              {dictionary.workspace.fromAnyDevice}
            </h2>
            <p className='text-muted-foreground max-w-xl text-left text-lg leading-relaxed tracking-tight'>
              {dictionary.workspace.crossPlatformTagline}
            </p>
            <div>{dictionary.workspace.comingSoon}</div>
          </div>
        </div>

        <div className='relative my-16 w-full'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className='flex w-full justify-center'
          >
            <Image
              src={CrossPlatformSVG}
              alt='Cross Platform Support'
              className='mx-auto w-4/5 rounded-xl object-contain'
            />
          </motion.div>
        </div>

        <div className='mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 md:grid-cols-3'>
          <div className='bg-muted/10 rounded-xl border border-neutral-200/10 p-6 backdrop-blur-sm transition-all duration-300 hover:border-neutral-200/20 hover:shadow-md'>
            <div className='mb-3 flex items-center gap-2'>
              <IconDeviceLaptop className='text-blue-400' size={24} />
              <h3 className='text-xl font-semibold tracking-tight'>
                {dictionary.workspace.desktopApps}
              </h3>
            </div>
            <p className='text-muted-foreground'>{dictionary.workspace.desktopAppsDesc}</p>
          </div>
          <div className='bg-muted/10 rounded-xl border border-neutral-200/10 p-6 backdrop-blur-sm transition-all duration-300 hover:border-neutral-200/20 hover:shadow-md'>
            <div className='mb-3 flex items-center gap-2'>
              <IconDeviceTablet className='text-purple-400' size={24} />
              <h3 className='text-xl font-semibold tracking-tight'>
                {dictionary.workspace.tabletExperience}
              </h3>
            </div>
            <p className='text-muted-foreground'>{dictionary.workspace.tabletExperienceDesc}</p>
          </div>
          <div className='bg-muted/10 rounded-xl border border-neutral-200/10 p-6 backdrop-blur-sm transition-all duration-300 hover:border-neutral-200/20 hover:shadow-md'>
            <div className='mb-3 flex items-center gap-2'>
              <IconDeviceMobile className='text-green-400' size={24} />
              <h3 className='text-xl font-semibold tracking-tight'>
                {dictionary.workspace.mobileAccess}
              </h3>
            </div>
            <p className='text-muted-foreground'>{dictionary.workspace.mobileAccessDesc}</p>
            <div>{dictionary.workspace.comingSoon}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
