import { SectionWrapper } from '@/components/common/section-wrapper';
import { Subscribe } from '@/components/product-component/subscribe';
import { CTA2 } from '@/components/sections/cta';
import { EventsCarousel } from '@/components/sections/events';
import { FAQ1 } from '@/components/sections/faq';
import { FastestNoteTakingApp } from '@/components/sections/fastest';
import { Feature7 } from '@/components/sections/features';
import { Hero5 } from '@/components/sections/hero';
import { InSync } from '@/components/sections/in-sync';
import { SmartestNoteTakingApp } from '@/components/sections/smartest';
// WorkspaceFeatures removed - now has its own dedicated page
import type { Locale } from '@/i18n-config';
import { getDictionary } from '@/lib/get-dictionaries';

export default async function Home(props: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await props.params;

  const dictionary = await getDictionary(locale);

  return (
    <>
      {/* Pass dictionary to child components */}
      <Hero5 dictionary={dictionary} />
      {/* <Case2 dictionary={dictionary} /> */}
      <SectionWrapper className='!pt-0'>
        <Feature7 dictionary={dictionary} />
      </SectionWrapper>
      <SectionWrapper>
        <FastestNoteTakingApp dictionary={dictionary} />
      </SectionWrapper>
      <SectionWrapper>
        <InSync dictionary={dictionary} />
      </SectionWrapper>
      <SectionWrapper>
        <SmartestNoteTakingApp dictionary={dictionary} />
      </SectionWrapper>
      {/* WorkspaceFeatures removed - now has its own dedicated page */}
      {/* Community-driven */}
      <SectionWrapper>
        <EventsCarousel />
      </SectionWrapper>
      <SectionWrapper>
        <FAQ1 dictionary={dictionary} />
      </SectionWrapper>
      <SectionWrapper>
        <Subscribe dictionary={dictionary} />
      </SectionWrapper>
      <CTA2 dictionary={dictionary} />
    </>
  );
}
