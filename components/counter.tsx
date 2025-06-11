import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

/**
 *
 * @param root0
 * @param root0.value
 */

type Props = {
  value: number;
  direction?: 'up' | 'down';
  className?: string;
  delay?: number; // Delay in milliseconds before counting starts
};

export default function Counter({ value, direction = 'up', className, delay = 0 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === 'down' ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 100
  });
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        motionValue.set(direction === 'down' ? 0 : value);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [motionValue, isInView, value, direction, delay]);

  useEffect(
    () =>
      springValue.on('change', (latest) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat('en-US').format(Math.round(latest));
        }
      }),
    [springValue]
  );

  return <span className={className} ref={ref} />;
}
