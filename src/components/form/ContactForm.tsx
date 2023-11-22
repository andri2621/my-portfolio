'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { z } from 'zod';

import { ContactFormSchema } from '@/lib/contactform-schema';
import logger from '@/lib/logger';
import { cn } from '@/lib/utils';

import { sendEmail } from '@/actions/sendEmail';

export type ContactFormInputs = z.infer<typeof ContactFormSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactFormSchema),
  });

  const processForm: SubmitHandler<ContactFormInputs> = async (data) => {
    const result = await sendEmail(data);

    if (result?.success && result?.data?.data?.id) {
      logger({ data: result.data });
      toast.success('Email sent!');
      reset();
      return;
    }

    // toast error
    logger(result?.error);
    toast.error('Something went wrong!');
  };

  return (
    <>
      <form onSubmit={handleSubmit(processForm)}>
        <div className='flex flex-col gap-4'>
          <div>
            <label htmlFor='email' className='mb-2 block text-sm font-medium'>
              Email
            </label>
            <div className='relative'>
              <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5'>
                <svg
                  className={cn('h-4 w-4 text-gray-500 dark:text-gray-400', {
                    '!text-error': errors.email?.message,
                  })}
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 16'
                >
                  <path d='m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z' />
                  <path d='M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z' />
                </svg>
              </div>
              <input
                type='text'
                id='email'
                {...register('email')}
                className={cn(
                  'block w-full',
                  'text-sm',
                  'bg-transparent',
                  'outline-none',
                  'rounded-lg border border-gray-300 p-2.5 pl-10 dark:border-gray-600',
                  'focus:border-primary focus:ring-primary',
                  {
                    '!border-error focus:!border-error focus:!ring-error':
                      errors.email?.message,
                  }
                )}
                placeholder='name@email.com'
              />
            </div>
            {errors.email?.message && (
              <p className='text-error mt-1 text-sm'>{errors.email.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor='subject'
              className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
            >
              Subject
            </label>
            <input
              type='text'
              id='subject'
              {...register('subject')}
              className={cn(
                'block w-full',
                'bg-transparent text-sm',
                'rounded-lg border border-gray-300 p-2.5 dark:border-gray-600',
                'focus:border-primary focus:ring-primary',
                {
                  '!border-error focus:!border-error focus:!ring-error':
                    errors.subject?.message,
                }
              )}
              placeholder='Subject'
            />
            {errors.subject?.message && (
              <p className='text-error mt-1 text-sm'>
                {errors.subject.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor='message'
              className='mb-2 block text-sm font-medium text-gray-900 group-active:bg-red-500 dark:text-white'
            >
              Messages
            </label>
            <textarea
              id='message'
              rows={4}
              {...register('message')}
              className={cn(
                'block w-full',
                'bg-transparent text-sm',
                'rounded-lg border border-gray-300 p-2.5 dark:border-gray-600',
                'focus:border-primary focus:ring-primary',
                {
                  '!border-error focus:!border-error focus:!ring-error':
                    errors.message?.message,
                }
              )}
              placeholder='Write your message here...'
            />
            {errors.message?.message && (
              <p className='text-error mt-1 text-sm'>
                {errors.message.message}
              </p>
            )}
          </div>
        </div>
        <div className='flex w-full justify-end'>
          <button
            type='submit'
            disabled={isSubmitting}
            className='btn btn-primary btn-sm mt-6'
          >
            {isSubmitting && <span className='loading loading-spinner'></span>}
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </>
  );
}
