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
    <main className='w-full flex-grow overflow-x-hidden'>
      <div className='mx-auto w-full max-w-3xl px-4 sm:px-6'>{children}</div>
    </main>
  );
}
