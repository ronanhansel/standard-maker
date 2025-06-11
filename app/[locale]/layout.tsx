import { Footer1 } from '@/components/common/footer';
import { Header1 } from '@/components/common/header';
import type { Locale } from '@/i18n-config';
import { getDictionary } from '@/lib/get-dictionaries';

export const runtime = 'edge';

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}>) {
  const { locale } = await params;

  const dictionary = await getDictionary(locale);
  return (
    <div className='flex min-h-screen flex-col font-sans'>
      <Header1 dictionary={dictionary} />
      <main className='flex-grow'>{children}</main>
      <Footer1 dictionary={dictionary} />
    </div>
  );
}
