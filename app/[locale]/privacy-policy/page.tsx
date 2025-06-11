import type { Locale } from '@/i18n-config';
import { getDictionary } from '@/lib/get-dictionaries';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | LECOLE',
  description: 'LECOLE Digital SAT Suite Privacy Policy'
};

export default async function PrivacyPolicyPage({
  params
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  const dictionary = await getDictionary(locale);
  const { title, lastUpdated, sections } = dictionary.privacyPolicy;

  return (
    <main className='flex-grow'>
      <div className='animate-in fade-in-0 relative flex w-full flex-col items-center justify-center rounded-md py-24 antialiased duration-1000'>
        <div className='mx-auto max-w-3xl p-4'>
          <h1 className='mb-2 text-center text-3xl font-bold md:text-4xl'>{title}</h1>
          <p className='mb-8 text-center text-neutral-500'>{lastUpdated}</p>

          <div className='prose prose-neutral dark:prose-invert max-w-none'>
            <section className='mb-8'>
              <h2 className='mb-4 text-xl font-semibold'>{sections.introduction.title}</h2>
              <p>{sections.introduction.content}</p>
            </section>

            <section className='mb-8'>
              <h2 className='mb-4 text-xl font-semibold'>{sections.infoCollect.title}</h2>
              <div className='mb-6 ml-4'>
                <h3 className='mb-2 text-lg font-medium'>
                  {sections.infoCollect.personalInfo.title}
                </h3>
                <p>{sections.infoCollect.personalInfo.content}</p>
                <ul className='mt-2 ml-6 list-disc space-y-1'>
                  <li
                    dangerouslySetInnerHTML={{
                      __html: sections.infoCollect.personalInfo.contactInfo
                    }}
                  />
                  <li
                    dangerouslySetInnerHTML={{
                      __html: sections.infoCollect.personalInfo.paymentInfo
                    }}
                  />
                  <li
                    dangerouslySetInnerHTML={{
                      __html: sections.infoCollect.personalInfo.userContent
                    }}
                  />
                  <li
                    dangerouslySetInnerHTML={{
                      __html: sections.infoCollect.personalInfo.usageData
                    }}
                  />
                </ul>
              </div>
              <div className='ml-4'>
                <h3 className='mb-2 text-lg font-medium'>
                  {sections.infoCollect.nonPersonalInfo.title}
                </h3>
                <p>{sections.infoCollect.nonPersonalInfo.content}</p>
              </div>
            </section>

            <section className='mb-8'>
              <h2 className='mb-4 text-xl font-semibold'>{sections.useInfo.title}</h2>
              <p>{sections.useInfo.content}</p>
              <ul className='mt-2 ml-6 list-disc space-y-1'>
                {sections.useInfo.points.map((point, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
                ))}
              </ul>
            </section>

            <section className='mb-8'>
              <h2 className='mb-4 text-xl font-semibold'>{sections.shareInfo.title}</h2>
              <p>{sections.shareInfo.content}</p>
              <ul className='mt-2 ml-6 list-disc space-y-1'>
                {sections.shareInfo.points.map((point, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
                ))}
              </ul>
            </section>

            <section className='mb-8'>
              <h2 className='mb-4 text-xl font-semibold'>{sections.choices.title}</h2>
              <p>{sections.choices.content}</p>
              <ul className='mt-2 ml-6 list-disc space-y-1'>
                {sections.choices.points.map((point, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
                ))}
              </ul>
            </section>

            <section className='mb-8'>
              <h2 className='mb-4 text-xl font-semibold'>{sections.security.title}</h2>
              <p>{sections.security.content}</p>
            </section>

            <section className='mb-8'>
              <h2 className='mb-4 text-xl font-semibold'>{sections.retention.title}</h2>
              <p>{sections.retention.content}</p>
            </section>

            <section className='mb-8'>
              <h2 className='mb-4 text-xl font-semibold'>{sections.children.title}</h2>
              <p>{sections.children.content}</p>
            </section>

            <section className='mb-8'>
              <h2 className='mb-4 text-xl font-semibold'>{sections.changes.title}</h2>
              <p>{sections.changes.content}</p>
            </section>

            <section className='mb-8'>
              <h2 className='mb-4 text-xl font-semibold'>{sections.contact.title}</h2>
              <p>{sections.contact.content}</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
