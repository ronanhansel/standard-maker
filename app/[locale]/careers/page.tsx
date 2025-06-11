import { Careers } from '@/components/careers-component/careers';
import { Positions } from '@/components/careers-component/positions';
import { ResearcherFund } from '@/components/careers-component/researcher-fund';
import { SectionWrapper } from '@/components/common/section-wrapper';
import type { Locale } from '@/i18n-config';
import { getDictionary } from '@/lib/get-dictionaries';

export default async function Home(props: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await props.params;

  const dictionary = await getDictionary(locale);

  return (
    <main className='flex-grow'>
      <SectionWrapper>
        <Careers dictionary={dictionary} />
      </SectionWrapper>
      <SectionWrapper>
        <ResearcherFund dictionary={dictionary} />
      </SectionWrapper>
      <SectionWrapper>
        <Positions />
      </SectionWrapper>
    </main>
  );
}
