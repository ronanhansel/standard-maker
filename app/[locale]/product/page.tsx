import { SectionWrapper } from '@/components/common/section-wrapper';
import { ComingSoon } from '@/components/product-component/coming-soon';
import { Feature1 } from '@/components/product-component/k12-use-case';
import { Product } from '@/components/product-component/product';
import { Products } from '@/components/product-component/products';
import { Feature4 } from '@/components/product-component/researcher-use-case';
import { Subscribe } from '@/components/product-component/subscribe';
import type { Locale } from '@/i18n-config';
import { getDictionary } from '@/lib/get-dictionaries';

export default async function Home(props: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await props.params;

  const dictionary = await getDictionary(locale);

  return (
    <main className='flex-grow'>
      <SectionWrapper>
        <Product dictionary={dictionary} />
      </SectionWrapper>
      <SectionWrapper>
        <Products dictionary={dictionary} />
      </SectionWrapper>
      <SectionWrapper>
        <Feature1 dictionary={dictionary} />
      </SectionWrapper>
      <SectionWrapper>
        <Feature4 dictionary={dictionary} />
      </SectionWrapper>
      <SectionWrapper>
        <ComingSoon dictionary={dictionary} />
      </SectionWrapper>
      <SectionWrapper>
        <Subscribe dictionary={dictionary} />
      </SectionWrapper>
    </main>
  );
}
