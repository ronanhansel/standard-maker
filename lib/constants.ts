export const blurUpAnimation = {
  hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
};

export const wordAnimation = ({
  multiplier = 1,
  from = 'y',
  fromOffset = 40,
  kwargHidden,
  kwargVisible
}: {
  multiplier?: number;
  from?: 'x' | 'y';
  fromOffset?: number;
  kwargHidden?: any;
  kwargVisible?: any;
}) => {
  return {
    hidden: { opacity: 0, [from]: fromOffset, filter: 'blur(10px)', ...(kwargHidden as any) },
    visible: (i: number) => ({
      opacity: 1,
      [from]: 0,
      filter: 'blur(0px)',
      ...(kwargVisible as any),
      transition: {
        delay: 0.2 + i * 0.1 * multiplier,
        duration: 0.5,
        ease: 'easeOut'
      }
    })
  } as any; // Using type assertion to bypass type checking issues
};
