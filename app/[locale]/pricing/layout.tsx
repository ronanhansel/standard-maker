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
  return <main>{children}</main>;
}
