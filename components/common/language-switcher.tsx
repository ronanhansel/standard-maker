'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { i18n, type Locale } from '@/i18n-config';
import { cn } from '@/lib/utils';
import { getCookie, setCookie } from 'cookies-next';
import { Globe } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

const languageMap = {
  en: 'English',
  vi: 'Tiếng Việt'
};

export const LanguageSwitcher = ({
  variant = 'header',
  showLanguage = false
}: {
  variant?: 'footer' | 'header';
  showLanguage?: boolean;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [currentLocale, setCurrentLocale] = useState<Locale | null>(null);

  useEffect(() => {
    // Initialize with cookies or URL
    if (typeof window !== 'undefined') {
      // Try to get locale from cookie first (set by middleware)
      const cookieLocale = getCookie('NEXT_LOCALE') as Locale | undefined;

      // If no cookie, get from URL
      if (!cookieLocale && pathname) {
        const segments = pathname.split('/');
        const urlLocale = segments[1] as Locale;

        if (i18n.locales.includes(urlLocale)) {
          setCurrentLocale(urlLocale);
          // Save to localStorage and cookie for future use
          localStorage.setItem('preferredLocale', urlLocale);
          setCookie('NEXT_LOCALE', urlLocale, {
            maxAge: 60 * 60 * 24 * 365, // 1 year
            path: '/'
          });
        }
      } else if (cookieLocale && i18n.locales.includes(cookieLocale)) {
        // Use cookie locale
        setCurrentLocale(cookieLocale);
        localStorage.setItem('preferredLocale', cookieLocale);
      }
    }
  }, []);

  useEffect(() => {
    // Update current locale when URL changes
    if (pathname) {
      const segments = pathname.split('/');
      const pathLocale = segments[1] as Locale;

      // Only store if it's a valid locale
      if (i18n.locales.includes(pathLocale)) {
        setCurrentLocale(pathLocale);
        localStorage.setItem('preferredLocale', pathLocale);
        // Also set a cookie that the middleware can access
        setCookie('NEXT_LOCALE', pathLocale, {
          maxAge: 60 * 60 * 24 * 365, // 1 year
          path: '/'
        });
      }
    }
  }, [pathname]);

  const redirectedPathname = (newLocale: Locale) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = newLocale;
    return segments.join('/');
  };

  const handleLocaleChange = (locale: Locale) => {
    // Save to localStorage
    localStorage.setItem('preferredLocale', locale);

    // Set cookie for server-side (middleware) access
    setCookie('NEXT_LOCALE', locale, {
      maxAge: 60 * 60 * 24 * 365, // 1 year
      path: '/'
    });

    // Update state
    setCurrentLocale(locale);

    // Navigate to the new locale path
    router.replace(redirectedPathname(locale));
    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size={showLanguage ? 'icon' : 'default'} className='w-fit'>
          {!showLanguage ? (
            <Globe />
          ) : (
            <div className='px-2'>{languageMap[currentLocale as Locale]}</div>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align='end'
        className={cn(
          'space-y-1 bg-transparent backdrop-blur-sm',
          variant === 'footer' && 'bg-muted'
        )}
      >
        {i18n.locales.map((locale: Locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => handleLocaleChange(locale)}
            className={cn(
              currentLocale === locale
                ? 'bg-accent/50 text-accent-foreground'
                : 'text-muted-foreground',
              'cursor-pointer'
            )}
          >
            {languageMap[locale]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
