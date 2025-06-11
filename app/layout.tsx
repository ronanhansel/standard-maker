import iconDark from '@/public/icons/logo-icon-white.svg';
import iconLignt from '@/public/icons/logo-icon.svg';
import type { Metadata } from 'next';

import './globals.css';

import { ThemeProvider } from '@/components/contexts/theme-provider';
import { PostHogProvider } from '@/components/posthog-provider';
import { i18n, type Locale } from '@/i18n-config';
import localFont from 'next/font/local';

const outfit = localFont({
  variable: '--font-outfit',
  src: '../public/fonts/SVN-Outfit-Variable.ttf',
  display: 'swap'
});

const horizon = localFont({
  variable: '--font-horizon',
  src: '../public/fonts/Horizon.otf',
  display: 'swap'
});

const horizon_outlined = localFont({
  variable: '--font-horizon-outlined',
  src: '../public/fonts/Horizon-Outlined.otf',
  display: 'swap'
});

const geistMono = localFont({
  variable: '--font-geist-mono',
  src: '../public/fonts/GeistMono-VariableFont_wght.ttf',
  display: 'swap'
});

// Default metadata configuration (not exported)
const defaultMetadata = {
  title: 'LECOLE - A Modern AI Workspace for Students',
  description:
    'LECOLE Workspace streamlines your research and learning tasks, making even the most complex projects effortless.',
  keywords: [
    'AI learning',
    'workspace editor',
    'note taking',
    'education',
    'productivity',
    'research assistant'
  ],
  openGraph: {
    type: 'website',
    url: 'https://lecole.tech/',
    title: 'LECOLE - A Modern AI Workspace for Students',
    description:
      'LECOLE Workspace streamlines your research and learning tasks, making even the most complex projects effortless.',
    images: [{ url: 'https://storage.lecole.tech/images/metadata_lecole.jpg' }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@lecole_tech',
    title: 'LECOLE - A Modern AI Workspace for Students',
    description:
      'LECOLE Workspace streamlines your research and learning tasks, making even the most complex projects effortless.',
    images: [{ url: 'https://storage.lecole.tech/images/metadata_lecole.jpg' }]
  }
};

// Generate metadata based on locale
export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  // Resolve the promise to get the locale
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || i18n.defaultLocale;

  // Create alternate language links for SEO
  const alternateLanguages = i18n.locales.reduce((acc: Record<string, string>, lang) => {
    acc[lang] = `https://lecole.tech/${lang}`;
    return acc;
  }, {});

  if (locale === 'vi') {
    return {
      title: 'LECOLE - Ghi chú hiệu quả hơn với AI',
      description:
        'LECOLE Workspace đơn giản hoá việc ghi chú với AI, giúp cho việc học tập trở nên dễ dàng hơn.',
      keywords: [
        'AI học tập',
        'không gian làm việc',
        'ghi chú',
        'giáo dục',
        'năng suất',
        'trợ lý nghiên cứu'
      ],
      icons: [
        {
          rel: 'icon',
          media: '(prefers-color-scheme: light)',
          type: 'image/svg+xml',
          url: iconLignt.src
        },
        {
          rel: 'icon',
          media: '(prefers-color-scheme: dark)',
          type: 'image/svg+xml',
          url: iconDark.src
        }
      ],
      alternates: {
        languages: alternateLanguages,
        canonical: `https://lecole.tech/${locale}`
      },
      openGraph: {
        type: 'website',
        url: `https://lecole.tech/${locale}`,
        title: 'LECOLE - Ghi chú hiệu quả hơn với AI',
        description:
          'LECOLE Workspace đơn giản hoá việc ghi chú với AI, giúp cho việc học tập trở nên dễ dàng hơn.',
        images: [{ url: 'https://storage.lecole.tech/images/metadata_lecole.jpg' }]
      },
      twitter: {
        card: 'summary_large_image',
        site: '@lecole_tech',
        title: 'LECOLE - Ghi chú hiệu quả hơn với AI',
        description:
          'LECOLE Workspace đơn giản hoá việc ghi chú với AI, giúp cho việc học tập trở nên dễ dàng hơn.',
        images: [{ url: 'https://storage.lecole.tech/images/metadata_lecole.jpg' }]
      }
    };
  }

  // For English or any other language, return default metadata with language alternates
  return {
    ...defaultMetadata,
    icons: [
      {
        rel: 'icon',
        media: '(prefers-color-scheme: light)',
        type: 'image/svg+xml',
        url: iconLignt.src
      },
      {
        rel: 'icon',
        media: '(prefers-color-scheme: dark)',
        type: 'image/svg+xml',
        url: iconDark.src
      }
    ],
    alternates: {
      languages: alternateLanguages,
      canonical: `https://lecole.tech/${locale}`
    },
    openGraph: {
      ...defaultMetadata.openGraph,
      url: `https://lecole.tech/${locale}`
    }
  };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  // For TypeScript safety, use a default locale when await fails
  let locale: Locale = i18n.defaultLocale;

  try {
    const propParams = await params;
    if (propParams && propParams.locale && i18n.locales.includes(propParams.locale)) {
      locale = propParams.locale;
    }
  } catch (error) {
    console.error('Error getting locale from params:', error);
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <meta name='apple-mobile-web-app-title' content='LECOLE' />
      <body
        className={`${outfit.variable} ${horizon.variable} ${horizon_outlined.variable} ${geistMono.variable} antialiased`}
      >
        <PostHogProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='dark'
            enableSystem={false}
            disableTransitionOnChange
            forcedTheme='dark'
          >
            {children}
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
