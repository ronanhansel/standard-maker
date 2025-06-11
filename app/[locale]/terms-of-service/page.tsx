import type { Locale } from '@/i18n-config';
import { getDictionary } from '@/lib/get-dictionaries';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | LECOLE',
  description: 'LECOLE Terms of Service'
};

export default async function TermsOfServicePage({
  params
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  const dictionary = await getDictionary(locale);
  const { title, lastUpdated, sections } = dictionary.termsOfService;

  return (
    <main className='flex-grow'>
      <div className='animate-in fade-in-0 relative flex w-full flex-col items-center justify-center rounded-md py-24 antialiased duration-1000'>
        <div className='mx-auto max-w-3xl p-4'>
          <h1 className='mb-2 text-center text-3xl font-bold md:text-4xl'>{title}</h1>
          <p className='mb-8 text-center text-neutral-500'>{lastUpdated}</p>

          <div className='prose prose-neutral dark:prose-invert max-w-none'>
            {Object.entries(sections).map(([key, section]: [string, any]) => (
              <section key={key} className='mb-8'>
                <h2 className='mb-4 text-xl font-semibold'>{section.title}</h2>
                <p className='whitespace-pre-line'>{section.content}</p>
              </section>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
