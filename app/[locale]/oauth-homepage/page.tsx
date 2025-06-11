import type { Locale } from '@/i18n-config';
import { getDictionary } from '@/lib/get-dictionaries';
import Logo from '@/public/icons/logo-icon-white.svg';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Google OAuth2 Homepage | LECOLE',
  description: 'LECOLE Google OAuth2 Homepage'
};

export default async function OAuthHomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  const dictionary = await getDictionary(locale);
  const oauth = dictionary.oauthHomepage;

  return (
    <main className='flex-grow'>
      <div className='animate-in fade-in-0 relative flex w-full flex-col items-center justify-center rounded-md py-24 antialiased duration-1000'>
        <div className='mx-auto max-w-3xl p-4'>
          <h1 className='mb-6 text-center text-3xl font-bold md:text-4xl'>{oauth.title}</h1>

          <div className='mb-8 flex justify-center'>
            <Image
              src={Logo}
              alt='LECOLE Logo'
              width={200}
              height={200}
              className='rounded-lg shadow-lg'
            />
          </div>

          <div className='prose prose-neutral dark:prose-invert max-w-none'>
            <section className='mb-8'>
              <h2 className='mb-2 text-xl font-semibold'>{oauth.appPurpose}</h2>
              <p className='mb-4'>{oauth.appPurposeDesc}</p>
            </section>

            <section className='mb-8'>
              <h2 className='mb-2 text-xl font-semibold'>{oauth.identity}</h2>
              <p className='mb-4'>{oauth.identityDesc}</p>
            </section>

            <section className='mb-8'>
              <h2 className='mb-2 text-xl font-semibold'>{oauth.userData}</h2>
              <p className='mb-4'>{oauth.userDataDesc}</p>
            </section>

            <section className='mb-8'>
              <h2 className='mb-2 text-xl font-semibold'>{oauth.enhanceFunc}</h2>
              <p className='mb-4'>{oauth.enhanceFuncDesc}</p>
            </section>

            <section className='mb-8'>
              <p className='mb-2'>
                {oauth.privacyPolicyLink}{' '}
                <Link
                  href='/privacy-policy'
                  className='text-blue-500 underline hover:text-blue-700'
                >
                  {oauth.privacyPolicyLinkText}
                </Link>
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='mb-2 text-xl font-semibold'>{oauth.appDesc}</h2>
              <p className='mb-4'>{oauth.appDescText}</p>
            </section>

            <section className='mb-8'>
              <h2 className='mb-4 text-xl font-semibold'>{oauth.limitedUseTitle}</h2>
              <p className='mb-4'>
                {oauth.limitedUseDesc}{' '}
                <a
                  href='https://developers.google.com/terms/api-services-user-data-policy'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-500 underline hover:text-blue-700'
                >
                  {oauth.googleAPIPolicy}
                </a>
                {oauth.limitedUseDetails && `, ${oauth.limitedUseDetails}`}
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
