'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu';
import { i18n, type Locale } from '@/i18n-config';
import type { DictionaryType } from '@/lib/types';
import { cn } from '@/lib/utils';
import { getCookie, setCookie } from 'cookies-next';
import { AnimatePresence, motion } from 'framer-motion';
import { Briefcase, Mail, Menu, MoveRight, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { trackCTAClick } from '../posthog-provider';

export const Header1 = ({ dictionary }: { dictionary: DictionaryType }) => {
  const [isOpen, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMobileItem, setActiveMobileItem] = useState<string | null>(null);
  const [openMenu, setOpenMenu] = useState<string | undefined>(undefined);
  const navigationRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const [currentLocale, setCurrentLocale] = useState<Locale>(i18n.defaultLocale);

  useEffect(() => {
    // Check for saved locale preference and ensure it's reflected in the URL
    const checkLocalePreference = () => {
      if (typeof window !== 'undefined') {
        // First check cookie (which middleware also uses)
        let savedLocale = getCookie('NEXT_LOCALE') as Locale | undefined;

        // Fallback to localStorage if cookie not set
        if (!savedLocale) {
          savedLocale = (localStorage.getItem('preferredLocale') as Locale | null) || undefined;
        }

        if (savedLocale && i18n.locales.includes(savedLocale)) {
          setCurrentLocale(savedLocale);

          // Get current locale from URL
          const segments = pathname?.split('/') || [];
          const urlLocale = segments[1] as Locale;

          // If URL doesn't match preferred locale, redirect
          if (urlLocale !== savedLocale && pathname) {
            segments[1] = savedLocale;
            const newPath = segments.join('/');

            // Set cookie to ensure middleware also uses this locale
            setCookie('NEXT_LOCALE', savedLocale, {
              maxAge: 60 * 60 * 24 * 365, // 1 year
              path: '/'
            });

            router.replace(newPath);
          }
        } else if (pathname) {
          // Extract locale from URL if no preference exists
          const segments = pathname.split('/');
          const urlLocale = segments[1] as Locale;

          if (i18n.locales.includes(urlLocale)) {
            setCurrentLocale(urlLocale);
          }
        }
      }
    };

    checkLocalePreference();
  }, [pathname, router]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const halfScreenHeight = window.innerHeight / 5;
      setScrolled(scrollY > halfScreenHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize active mobile item based on pathname
  useEffect(() => {
    if (pathname) {
      const currentPath = pathname;
      // Find matching navigation item
      const activeItem = navigationItems.find((item) => {
        if (item.href === '/') {
          return (
            currentPath === `/${currentLocale}` ||
            currentPath === `/${currentLocale}/` ||
            currentPath === '/' ||
            currentPath === '//'
          );
        }
        return item.href && currentPath.endsWith(item.href);
      });
      if (activeItem) {
        setActiveMobileItem(activeItem.href || null);
      }
    }
  }, [pathname, currentLocale]);

  interface NavigationItem {
    title: string;
    href?: string;
    description?: string;
    customElement?: React.ReactNode;
    items?: {
      title: string;
      icon: React.ReactNode;
      description?: string;
      href: string;
      customElement?: React.ReactNode;
    }[];
  }

  const navigationItems: NavigationItem[] = [
    {
      title: dictionary['header'].home,
      href: '/'
    },
    {
      title: dictionary['header'].product,
      href: '/product'
    },
    {
      title: dictionary['header'].pricing,
      href: '/pricing'
    },
    {
      title: dictionary['header'].aboutUs,
      href: '/about',
      customElement: (
        <div className='flex h-full w-full flex-col items-start justify-end'>
          <p className='font-[Horizon] text-2xl'>LECOLE</p>
          <p className='text-base'>Building the future of education</p>
        </div>
      ),
      items: [
        {
          title: dictionary['header'].careers,
          href: '/careers',
          description: dictionary['header'].careersDesc,
          icon: <Briefcase size={18} />
        },
        {
          title: dictionary['header'].contact,
          href: '/contact',
          description: dictionary['header'].contactDesc,
          icon: <Mail size={18} />
        }
      ]
    }
  ];

  return (
    <header
      className={cn(
        `fixed top-0 left-0 z-40 w-full transition-all duration-300`,
        isOpen && 'bg-background',
        !isOpen && scrolled && 'bg-background/25 backdrop-blur-sm',
        scrolled ? 'lg:bg-background/25 lg:backdrop-blur-sm' : 'lg:bg-transparent'
      )}
    >
      <div className='relative container mx-auto flex min-h-20 flex-row items-center justify-between gap-4 px-4 lg:grid lg:grid-cols-3'>
        <div
          className='lg:justify-left flex cursor-pointer'
          onClick={() => {
            router.push(`/${currentLocale}`);
          }}
        >
          <motion.p
            whileHover={{
              scale: 1.1
            }}
            className='font-[Horizon] text-2xl font-bold'
          >
            LECOLE
          </motion.p>
        </div>
        <div className='hidden flex-row items-center justify-center gap-4 lg:flex'>
          <NavigationMenu
            className='flex items-start justify-start'
            delayDuration={0}
            viewport={false}
            value={openMenu}
            onValueChange={setOpenMenu}
            ref={navigationRef}
          >
            <NavigationMenuList className='flex flex-row justify-start gap-4'>
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title} className='font-[Outfit]'>
                  {item.items ? (
                    // Grouped items
                    <>
                      <NavigationMenuTrigger
                        className='hover:!bg-muted/50 !bg-transparent text-sm font-medium transition-all duration-300'
                        showChevron={false}
                        onClick={(e) => {
                          if (item.href) {
                            // Stop the NavigationMenuTrigger's default behavior
                            e.preventDefault();
                            e.stopPropagation();

                            // Force close the menu by simulating an escape key press
                            const event = new KeyboardEvent('keydown', {
                              key: 'Escape',
                              bubbles: true
                            });
                            document.dispatchEvent(event);

                            // Navigate after a brief delay
                            if (item.href) {
                              router.push(`/${currentLocale}${item.href}`);
                            }
                          }
                        }}
                      >
                        <span className='relative'>
                          {item.title}
                          <AnimatePresence>
                            {item.href &&
                            ((item.href === '/' &&
                              (pathname === `/${currentLocale}` ||
                                pathname === `/${currentLocale}/` ||
                                pathname === '/' ||
                                pathname === '/')) ||
                              (item.href !== '/' && pathname.endsWith(item.href))) ? (
                              <motion.div
                                className='absolute -bottom-1 left-1/2 h-1 w-full -translate-x-1/2 rounded-3xl bg-white'
                                initial={{ scaleX: 0, transformOrigin: 'left' }}
                                animate={{ scaleX: 1, transformOrigin: 'left' }}
                                exit={{ scaleX: 0, transformOrigin: 'right' }}
                              />
                            ) : null}
                          </AnimatePresence>
                        </span>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className='!bg-background absolute left-1/2 !w-[600px] -translate-x-1/2 p-4'>
                        <div className='flex h-full grid-cols-2 flex-col gap-4 lg:grid'>
                          <Link
                            href={`/${currentLocale}${item.href}`}
                            className='from-muted/25 to-muted/75 hover:from-muted/35 hover:to-muted/90 flex h-full cursor-pointer flex-col justify-between rounded-lg bg-gradient-to-b p-4 transition-colors duration-200'
                            onClick={(e) => {
                              e.preventDefault();
                              // Force close the menu
                              setOpenMenu(undefined);
                              // Wait a moment for the UI to update
                              // Navigate
                              if (item.href) {
                                router.push(`/${currentLocale}${item.href}`);
                              }
                            }}
                          >
                            <div className='flex h-full flex-col'>
                              {/* <p className='text-base'>{item.title}</p> */}
                              <p className='text-muted-foreground text-sm'>{item.description}</p>
                              {item.customElement && (
                                <div className='mt-4 flex h-full flex-1'>{item.customElement}</div>
                              )}
                            </div>
                          </Link>
                          <div className='flex h-full flex-col justify-start text-sm'>
                            {item.items?.map((subItem) => (
                              <Link
                                href={`/${currentLocale}${subItem.href}`}
                                key={subItem.title}
                                className='hover:bg-muted/50 mb-2 flex flex-row items-center gap-4 rounded-lg p-4 shadow-md transition-colors duration-200'
                                onClick={(e) => {
                                  e.preventDefault();
                                  // Force close the menu by simulating an escape key press
                                  const event = new KeyboardEvent('keydown', {
                                    key: 'Escape',
                                    bubbles: true
                                  });
                                  document.dispatchEvent(event);
                                  // Navigate after a brief delay
                                  setTimeout(() => {
                                    if (subItem.href) {
                                      router.push(`/${currentLocale}${subItem.href}`);
                                    }
                                  }, 10);
                                }}
                              >
                                <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full'>
                                  {subItem.icon}
                                </div>
                                <div className='flex flex-col text-left'>
                                  <span className='text-base font-semibold'>{subItem.title}</span>
                                  {subItem.description && (
                                    <span className='text-muted-foreground text-sm'>
                                      {subItem.description}
                                    </span>
                                  )}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : // Single item
                  item.href ? (
                    <Link href={item.href} className={'relative !bg-transparent'}>
                      <AnimatePresence>
                        {(item.href === '/' &&
                          (pathname === `/${currentLocale}` ||
                            pathname === `/${currentLocale}/` ||
                            pathname === '/' ||
                            pathname === '/')) ||
                        (item.href !== '/' && pathname.endsWith(item.href)) ? (
                          <motion.div
                            className='absolute -bottom-1 left-1/2 h-1 w-1/2 -translate-x-1/2 rounded-3xl bg-white'
                            initial={{ scaleX: 0, transformOrigin: 'left' }}
                            animate={{ scaleX: 1, transformOrigin: 'left' }}
                            exit={{ scaleX: 0, transformOrigin: 'right' }}
                          />
                        ) : null}
                      </AnimatePresence>
                      <Button variant='ghost' className='text-foreground'>
                        {item.title}
                      </Button>
                    </Link>
                  ) : (
                    <Button variant='ghost' className='text-foreground'>
                      {item.title}
                    </Button>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className='hidden items-center justify-end lg:col-start-3 lg:flex'>
          <div className='items-center gap-2 lg:flex'>
            <div className='hidden border-r md:inline'></div>
            <Button
              onClick={() => {
                trackCTAClick('Try Now', 'cta_section');
                router.push('https://app.lecole.tech');
              }}
            >
              {dictionary['common'].login}
            </Button>
          </div>
        </div>
        <div className='flex w-12 shrink items-end justify-end lg:hidden'>
          <Button variant='ghost' onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
          </Button>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={`bg-background fixed top-20 left-0 flex h-screen w-screen flex-col gap-8 border-t p-4 shadow-lg lg:hidden`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {navigationItems.map((item) => (
                <div key={item.title} className='relative'>
                  {item.href && activeMobileItem === item.href ? (
                    <motion.div
                      className='absolute -left-2 h-full w-1 rounded-3xl bg-white'
                      layoutId='mobileActiveIndicator'
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  ) : null}
                  <div className='flex flex-col gap-2'>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className='flex items-center justify-between'
                        onClick={(e) => {
                          if (item.href) {
                            e.preventDefault();
                            // Update active item first for animation
                            setActiveMobileItem(item.href || null);
                            // Then navigate after a brief delay
                            setTimeout(() => {
                              if (item.href) {
                                router.push(`/${currentLocale}${item.href}`);
                              }
                            }, 10);
                            // Close menu after navigation starts
                            setTimeout(() => setOpen(false), 300);
                          }
                        }}
                      >
                        <span className='text-lg'>{item.title}</span>
                      </Link>
                    ) : (
                      <p className='text-lg'>{item.title}</p>
                    )}
                    {item.items &&
                      item.items.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className='flex items-center justify-between'
                          onClick={(e) => {
                            if (subItem.href) {
                              e.preventDefault();
                              // Update active item to null since submenu items don't have indicators
                              setActiveMobileItem(null);
                              // Then navigate
                              setTimeout(() => {
                                if (subItem.href) {
                                  router.push(`/${currentLocale}${subItem.href}`);
                                }
                              }, 10);
                              // Close menu after navigation starts
                              setTimeout(() => setOpen(false), 300);
                            }
                          }}
                        >
                          <span className='text-muted-foreground'>{subItem.title}</span>
                          <MoveRight className='h-4 w-4 stroke-1' />
                        </Link>
                      ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
