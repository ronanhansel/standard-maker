import type { Locale } from '@/i18n-config';
import { getDictionary } from '@/lib/get-dictionaries';
import type { Metadata } from 'next';

export const runtime = 'edge';

export const metadata: Metadata = {
  title: 'LECOLE Careers',
  description: 'See our open positions & programmes and apply for a role at LECOLE.',
  openGraph: {
    type: 'website',
    url: 'https://lecole.tech/careers',
    title: 'LECOLE',
    description: 'See our open positions & programmes and apply for a role at LECOLE.',
    images: [{ url: 'https://storage.lecole.tech/images/metadata_lecole.jpg' }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@lecole_tech',
    title: 'LECOLE',
    description: 'See our open positions & programmes and apply for a role at LECOLE.',
    images: [{ url: 'https://storage.lecole.tech/images/metadata_lecole.jpg' }]
  }
};
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
