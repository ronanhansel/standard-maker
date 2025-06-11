import { SectionWrapper } from '@/components/common/section-wrapper';
import { Address } from '@/components/contact-component/address';
import { Contact } from '@/components/contact-component/contact';
import { Socials } from '@/components/contact-component/socials';
import type { Locale } from '@/i18n-config';
import { getDictionary } from '@/lib/get-dictionaries';

export default async function Home(props: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await props.params;

  const dictionary = await getDictionary(locale);

  return (
    <main className='flex-grow overflow-hidden'>
      <SectionWrapper className='relative'>
        <Contact dictionary={dictionary} />
      </SectionWrapper>
      <SectionWrapper>
        <Address dictionary={dictionary} />
      </SectionWrapper>
      <SectionWrapper>
        <Socials dictionary={dictionary} />
      </SectionWrapper>
      <div className='mb-20'></div>
    </main>
  );
}
