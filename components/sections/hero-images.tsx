'use client';

import { useEffect, useState } from 'react';
import ExcalidrawSVG from '@/public/images/interface/excalidraw.svg';
import FolderInterfaceSVG from '@/public/images/interface/folder_interface.svg';
import NoteInterfaceSVG from '@/public/images/interface/note_interface.svg';
import type { AnimationSequence } from 'framer-motion';
import { motion, useAnimate } from 'framer-motion';
import Image from 'next/image';

export const HeroImages = () => {
  const [scope, animate] = useAnimate();
  const [firstImageLoaded, setFirstImageLoaded] = useState(false);
  const [secondImageLoaded, setSecondImageLoaded] = useState(false);
  const [thirdImageLoaded, setThirdImageLoaded] = useState(false);

  const sequence1: AnimationSequence = [
    [
      '#div1',
      { opacity: 1, y: 0, filter: 'blur(0px)' },
      { duration: 0.75, ease: 'easeOut', delay: 0.5 }
    ],
    ['#div1', { opacity: 0.15, y: 200 }, { duration: 0.5, ease: 'easeOut', delay: 0.1 }]
  ];
  const sequence2: AnimationSequence = [
    ['#div2', { opacity: 1, y: 0 }, { duration: 0.5, ease: 'easeOut', delay: 1.5 }],
    ['#div2', { opacity: 0.15, y: 100 }, { duration: 0.5, ease: 'easeOut', delay: 0.1 }]
  ];
  const sequence3: AnimationSequence = [
    ['#div3', { opacity: 1, y: 0 }, { duration: 0.25, ease: 'easeIn', delay: 2 }]
  ];

  useEffect(() => {
    if (firstImageLoaded && secondImageLoaded && thirdImageLoaded) {
      animate(sequence1);
      animate(sequence2);
      animate(sequence3);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstImageLoaded, secondImageLoaded, thirdImageLoaded]);

  return (
    <div ref={scope}>
      <motion.div id='div1' initial={{ opacity: 0, filter: 'blur(10px)' }} className='opacity-0'>
        <HeroImage
          src={FolderInterfaceSVG}
          alt='Folder Interface'
          onLoad={() => setFirstImageLoaded(true)}
        />
      </motion.div>
      <motion.div id='div2' className='opacity-0'>
        <HeroImage src={ExcalidrawSVG} alt='Excalidraw' onLoad={() => setSecondImageLoaded(true)} />
      </motion.div>
      <motion.div id='div3' className='opacity-0'>
        <HeroImage
          src={NoteInterfaceSVG}
          alt='Note Interface'
          onLoad={() => setThirdImageLoaded(true)}
        />
      </motion.div>
    </div>
  );
};

const HeroImage = ({ src, alt, onLoad }: { src: string; alt: string; onLoad: () => void }) => {
  return (
    <Image
      src={src}
      alt={alt}
      className='absolute -rotate-x-25 -rotate-y-15 -rotate-z-10 border mask-r-from-70% mask-b-from-30% mask-radial-from-80% mask-radial-to-95% mask-radial-at-top-left object-cover object-top-left'
      onLoad={onLoad}
    />
  );
};
