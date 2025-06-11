'use client';

import { Card, Carousel } from '@/components/ui/apple-cards-carousel';

export function EventsCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} pivot={card.imagePivot} />
  ));

  return (
    <div className='h-full w-full py-20'>
      <h2 className='mx-auto max-w-7xl pl-4 font-sans font-bold text-neutral-800 dark:text-neutral-200'>
        Spotlight
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

type cardItem = {
  category: string;
  title: string;
  src: string;
  link?: string;
  imagePivot?:
    | 'top left'
    | 'top right'
    | 'bottom left'
    | 'bottom right'
    | 'center'
    | 'center left'
    | 'center right';
};

const data: cardItem[] = [
  {
    category: 'Newsroom',
    title: 'Welcome to LECOLE Workspace.',
    src: 'https://storage.lecole.tech/images/lecole_glassmorphism.png'
  },
  {
    category: 'Event',
    title: 'SAT in university admission.',
    src: 'https://storage.lecole.tech/images/sat_event.webp',
    link: 'https://laodong.vn/giao-duc/sat-buoc-dem-khong-chi-de-xet-tuyen-dai-hoc-1397794.ldo',
    imagePivot: 'center'
  },
  {
    category: 'Public',
    title: 'LECOLE on VTV2',
    src: 'https://storage.lecole.tech/images/dong_chay_so_vtv_2.jpg',
    imagePivot: 'center',
    link: 'https://blog.lecole.tech/blog/lecole-feature-on-vtv2/'
  }
];
