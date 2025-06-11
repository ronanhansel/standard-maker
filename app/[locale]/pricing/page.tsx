import { CallOut } from '@/components/pricing-compontent/call-out';
import { ComparisonTable } from '@/components/pricing-compontent/comparison-table';
import { Pricing } from '@/components/pricing-compontent/pricing';
import type { Locale } from '@/i18n-config';
import { getDictionary } from '@/lib/get-dictionaries';

export default async function Home(props: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await props.params;

  const dictionary = await getDictionary(locale);

  return (
    <main className='flex-grow'>
      <Pricing dictionary={dictionary} />
      <ComparisonTable dictionary={dictionary} />
      <CallOut dictionary={dictionary} />
    </main>
  );
}
