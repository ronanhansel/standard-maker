import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { DictionaryType } from '@/lib/types';
import { PhoneCall } from 'lucide-react';

type FAQKey =
  | 'platformsQuestion'
  | 'platformsAnswer'
  | 'privacyQuestion'
  | 'privacyAnswer'
  | 'agenticQuestion'
  | 'agenticAnswer'
  | 'collaborationQuestion'
  | 'collaborationAnswer'
  | 'freePlanQuestion'
  | 'freePlanAnswer';

export const FAQ1 = ({ dictionary }: { dictionary: DictionaryType }) => {
  const faqItems = [
    {
      id: 'platforms',
      question: 'platformsQuestion' as FAQKey,
      answer: 'platformsAnswer' as FAQKey
    },
    { id: 'privacy', question: 'privacyQuestion' as FAQKey, answer: 'privacyAnswer' as FAQKey },
    { id: 'agentic', question: 'agenticQuestion' as FAQKey, answer: 'agenticAnswer' as FAQKey },
    {
      id: 'collaboration',
      question: 'collaborationQuestion' as FAQKey,
      answer: 'collaborationAnswer' as FAQKey
    },
    { id: 'free-plan', question: 'freePlanQuestion' as FAQKey, answer: 'freePlanAnswer' as FAQKey }
  ];

  return (
    <div className='w-full px-4'>
      <div className='container mx-auto'>
        <div className='grid gap-10 lg:grid-cols-2'>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-4'>
              <div>
                <Badge variant='outline'>{dictionary['faq'].faq}</Badge>
              </div>
              <div className='flex flex-col gap-2'>
                <h2 className='font-regular max-w-xl text-left tracking-tighter'>
                  {dictionary['faq'].frequentlyAskedQuestions}
                </h2>
                <p className='text-muted-foreground max-w-xl text-left leading-relaxed tracking-tight lg:max-w-lg'>
                  {dictionary['faq'].questionsAnswers}
                </p>
              </div>
              <div className=''>
                <Button className='gap-4' variant='outline'>
                  {dictionary['faq'].anyQuestions}
                  <PhoneCall className='h-4 w-4' />
                </Button>
              </div>
            </div>
          </div>
          <Accordion type='single' collapsible className='w-full'>
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger className='text-lg md:text-xl'>
                  {dictionary['faq'][item.question]}
                </AccordionTrigger>
                <AccordionContent className='text-muted-foreground text-lg md:text-xl'>
                  {dictionary['faq'][item.answer]}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};
