'use client';

import { useEffect, useRef, useState } from 'react';
import { wordAnimation } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

import { AsciiDragon } from './ascii-dragon';

// Split the ASCII dragon into rows for animation
const dragonRows: string[] = AsciiDragon.split('\n');

// Group rows into chunks for better performance
const CHUNK_SIZE = 2; // Reduced chunk size for better animation visibility
export const Dragon = ({ className }: { className?: string }) => {
  // Use state to ensure client-side rendering of chunks
  const [dragonChunks, setDragonChunks] = useState<string[][]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create chunks on client side to ensure proper rendering
    const chunks: string[][] = [];
    for (let i = 0; i < dragonRows.length; i += CHUNK_SIZE) {
      chunks.push(dragonRows.slice(i, i + CHUNK_SIZE));
    }
    setDragonChunks(chunks);
  }, []);

  // Calculate the minimum height based on the number of rows
  const minHeightBase = dragonRows.length;

  return (
    <div ref={containerRef} className={cn('flex items-center justify-center', className)}>
      <pre
        className='mr-2 min-h-[calc(var(--row-count)*0.2rem)] mask-b-from-60% sm:min-h-[calc(var(--row-count)*0.3rem)] md:min-h-[calc(var(--row-count)*0.4rem)] lg:min-h-[calc(var(--row-count)*0.6rem)]'
        style={{ '--row-count': minHeightBase } as React.CSSProperties}
      >
        {dragonChunks.map((chunk, chunkIndex) => (
          <motion.pre
            key={chunkIndex}
            initial='hidden'
            animate='visible'
            variants={wordAnimation({
              multiplier: 0.75,
              from: 'x',
              fromOffset: -40,
              kwargHidden: { scale: 0.75 },
              kwargVisible: { scale: 1 }
            })}
            custom={chunkIndex}
          >
            {chunk.map((row: string, rowIndex: number) => (
              <div
                key={`row-${chunkIndex}-${rowIndex}`}
                className='text-[0.15rem] text-[#ffd495] sm:text-[0.2rem] md:text-[0.3rem] lg:text-[0.4rem]'
              >
                {row}
              </div>
            ))}
          </motion.pre>
        ))}
      </pre>
    </div>
  );
};
