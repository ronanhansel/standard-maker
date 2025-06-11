'use client';

import { useState } from 'react';
import type { DictionaryType } from '@/lib/types';
import { IconMail } from '@tabler/icons-react';
import { motion } from 'framer-motion';

import { Button } from '../ui/button';

export function Subscribe({ dictionary }: { dictionary: DictionaryType }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Basic validation
    if (!name.trim()) {
      setError('Please enter your name');
      setIsSubmitting(false);
      return;
    }

    if (!email.trim()) {
      setError('Please enter your email');
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }

    try {
      // Send the data to our API endpoint
      const response = await fetch('/api/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to subscribe');
      }

      setIsSuccess(true);
      setName('');
      setEmail('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='w-full' id='email-form'>
      <div className='container mx-auto px-10'>
        <div className='mx-auto max-w-3xl text-center'>
          <h2 className='mb-4 text-3xl font-bold tracking-tight sm:text-4xl'>
            {dictionary.product?.subscribe?.title || 'Stay updated'}
          </h2>
          <p className='text-muted-foreground mb-8 text-lg'>
            {dictionary.product?.subscribe?.description ||
              'Subscribe to our newsletter for the latest product updates and news.'}
          </p>

          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className='rounded-lg bg-green-50 p-6 text-green-800 shadow-sm dark:bg-green-950/30 dark:text-green-300'
            >
              <p>{dictionary.product?.subscribe?.successTitle || 'Thank you for subscribing!'}</p>
              <p>
                {dictionary.product?.subscribe?.successMessage ||
                  "We'll keep you updated with the latest news and product updates."}
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className='mt-6'>
              <div className='mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2'>
                <div>
                  <label htmlFor='name' className='sr-only'>
                    {dictionary.product?.subscribe?.nameLabel || 'Name'}
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='border-input bg-background focus:border-primary focus:ring-primary/50 w-full rounded-md border px-4 py-3 text-base focus:ring-2 focus:outline-none'
                    placeholder={dictionary.product?.subscribe?.namePlaceholder || 'Your name'}
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor='email' className='sr-only'>
                    {dictionary.product?.subscribe?.emailLabel || 'Email'}
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='border-input bg-background focus:border-primary focus:ring-primary/50 w-full rounded-md border px-4 py-3 text-base focus:ring-2 focus:outline-none'
                    placeholder={
                      dictionary.product?.subscribe?.emailPlaceholder || 'Your email address'
                    }
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {error && <div className='mb-4 text-sm text-red-500'>{error}</div>}

              <Button
                type='submit'
                className='w-full px-8 py-3 text-base sm:w-auto'
                size='lg'
                disabled={isSubmitting}
              >
                <IconMail className='mr-2' />
                {isSubmitting
                  ? dictionary.product?.subscribe?.submittingText || 'Subscribing...'
                  : dictionary.product?.subscribe?.buttonText || 'Subscribe'}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
