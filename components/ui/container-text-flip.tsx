'use client';

import React, { useEffect, useId, useState } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

export interface ContainerTextFlipProps {
  /** Array of words to cycle through in the animation */
  words?: string[];
  /** Time in milliseconds between word transitions */
  interval?: number;
  /** Additional CSS classes to apply to the container */
  className?: string;
  /** Additional CSS classes to apply to the text */
  textClassName?: string;
  /** Duration of the transition animation in milliseconds */
  animationDuration?: number;
}

export function ContainerTextFlip({
  words = ['better', 'modern', 'beautiful', 'awesome'],
  interval = 3000,
  className,
  textClassName,
  animationDuration = 700
}: ContainerTextFlipProps) {
  const id = useId();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(60); // Initial height
  const textRef = React.useRef(null);
  const containerRef = React.useRef(null);

  const updateDimensionsForWord = () => {
    if (textRef.current) {
      // Add some padding to the text width (30px on each side)
      // @ts-expect-error - textRef.current is not null
      const textWidth = textRef.current.scrollWidth + 60;
      // @ts-expect-error - textRef.current is not null
      const textHeight = textRef.current.scrollHeight;

      setWidth(textWidth);
      // Only update height if new height is larger to prevent collapse
      setHeight((prev) => Math.max(prev, textHeight));
    }
  };

  // Calculate max dimensions on initial render for all words
  useEffect(() => {
    let maxHeight = height;
    let maxWidth = width;

    // Create a temporary span to measure all words
    const tempSpan = document.createElement('span');
    tempSpan.style.visibility = 'hidden';
    tempSpan.style.position = 'absolute';
    tempSpan.style.fontSize = window.getComputedStyle(document.body).fontSize;
    tempSpan.style.fontFamily = 'Outfit';
    tempSpan.style.fontWeight = 'bold';
    tempSpan.style.whiteSpace = 'nowrap';
    tempSpan.className = 'text-4xl md:text-7xl';

    document.body.appendChild(tempSpan);

    // Measure each word
    words.forEach((word) => {
      tempSpan.textContent = word;
      maxWidth = Math.max(maxWidth, tempSpan.offsetWidth + 60);
      maxHeight = Math.max(maxHeight, tempSpan.offsetHeight);
    });

    document.body.removeChild(tempSpan);

    setWidth(maxWidth);
    setHeight(maxHeight);
  }, [words]);

  useEffect(() => {
    // Update dimensions whenever the word changes
    updateDimensionsForWord();
  }, [currentWordIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      // Dimensions will be updated in the effect that depends on currentWordIndex
    }, interval);

    return () => clearInterval(intervalId);
  }, [words, interval]);

  return (
    <motion.div
      layout
      layoutId={`words-here-${id}`}
      ref={containerRef}
      style={{ height }}
      animate={{ width }}
      transition={{ duration: animationDuration / 2000 }}
      className={cn(
        'text-blac relative inline-flex items-center justify-center rounded-lg pt-2 pb-3 text-center font-[Outfit] text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl dark:text-white',
        '[background:linear-gradient(to_bottom,#f3f4f6,#e5e7eb)]',
        'shadow-[inset_0_-1px_#d1d5db,inset_0_0_0_1px_#d1d5db,_0_4px_8px_#d1d5db]',
        'dark:[background:linear-gradient(to_bottom,#45454580,#d4d4d480)]',
        'dark:shadow-[inset_0_-1px_#10171e,inset_0_0_0_1px_hsla(27, 100%, 21%,.24),_0_4px_8px_#00000052]',
        className
      )}
      key={words[currentWordIndex]}
    >
      <motion.div
        transition={{
          duration: animationDuration / 1000,
          ease: 'easeInOut'
        }}
        className={cn('inline-block', textClassName)}
        ref={textRef}
        layoutId={`word-div-${words[currentWordIndex]}-${id}`}
      >
        <motion.div className='inline-block whitespace-nowrap'>
          {words[currentWordIndex].split('').map((letter, index) => (
            <motion.span
              key={index}
              initial={{
                opacity: 0,
                filter: 'blur(10px)'
              }}
              animate={{
                opacity: 1,
                filter: 'blur(0px)'
              }}
              transition={{
                delay: index * 0.02
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
