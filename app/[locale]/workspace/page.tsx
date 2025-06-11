import { WorkspaceFeatures } from '@/components/sections/workspace';
import type { Locale } from '@/i18n-config';
import { getDictionary } from '@/lib/get-dictionaries';

export default async function Home(props: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await props.params;

  const dictionary = await getDictionary(locale);

  return (
    <>
      {/* Pass dictionary to child components */}
      <WorkspaceFeatures dictionary={dictionary} />
    </>
  );
}
