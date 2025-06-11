import { Dragon } from '@/components/about-us-component/dragon';
import { AboutUsHeader } from '@/components/about-us-component/header';
import type { Locale } from '@/i18n-config';
import { getDictionary } from '@/lib/get-dictionaries';
import { marked } from 'marked';

import './react-markdown.css';

export default async function Home(props: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await props.params;

  const dictionary = await getDictionary(locale);

  const markdown = dictionary.about.message;
  const htmlContent = marked(markdown);

  return (
    <main className='animate-in fade-in-0 pt-30 duration-1000'>
      <div className='mx-auto flex max-w-5xl flex-col items-center justify-start px-4'>
        <Dragon />
        <AboutUsHeader dictionary={dictionary} />

        <div
          className='react-markdown mb-20 flex w-full flex-col gap-2'
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </main>
  );
}
