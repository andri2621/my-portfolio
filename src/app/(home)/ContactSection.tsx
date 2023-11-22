import { cn, getIcon } from '@/lib/utils';

import ContactForm from '@/components/form/ContactForm';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';

import { socialLink } from '@/constant/config';

const ContactSection = () => {
  return (
    // <section id='contact' className='flex min-h-screen flex-col py-20'>
    //   <h1 className='text-neutral mb-12 text-center text-3xl dark:text-white'>
    //     Contact Me
    //   </h1>
    <section id='contact' className='min-h-screen py-20'>
      <div className='text-center'>
        <h1 className='text-neutral text-3xl font-bold dark:text-white'>
          Contact Me
        </h1>
        <p className='mt-4 text-gray-600 dark:text-gray-400'>
          I'm always open to new opportunities and exciting projects. Whether
          you're looking for a freelance developer or just want to connect, feel
          free to get in touch with me.
        </p>
      </div>

      <div className='mt-4 grid items-start gap-6 lg:mt-12 lg:grid-cols-2 lg:gap-16'>
        {/* <!-- Blocks --> */}
        <div className='divide-y divide-gray-200 dark:divide-gray-800'>
          {/* <!-- Block 1 --> */}
          <div className='flex gap-x-3 py-6'>
            <svg
              className='mt-1 h-6 w-6 flex-shrink-0 text-gray-800 dark:text-gray-200'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              <circle cx='12' cy='12' r='10' />
              <path d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3' />
              <path d='M12 17h.01' />
            </svg>
            <div className='grow'>
              <div className='text-xl font-semibold text-gray-800 dark:text-gray-200'>
                Ask Me Anything
              </div>
              <p className='mt-1 text-sm text-gray-500'>
                Leave whatever you like to say—message, appreciation,
                suggestions, or questions on the AMA Discussion
              </p>
              <UnderlineLink
                href='https://github.com/andri2621/my-portfolio/discussions/7'
                className={cn(
                  'mt-2 inline-flex items-center gap-x-1',
                  'text-sm font-medium',
                  'hover:text-primary text-gray-600',
                  'dark:hover:text-primary dark:text-gray-400',
                  'dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                )}
              >
                Visit AMA Discussion
              </UnderlineLink>
            </div>
          </div>
          {/* <!-- End Block 1 --> */}

          {/* <!-- Block 2 --> */}
          <div className=' flex gap-x-3 py-6'>
            <svg
              className='mt-1 h-6 w-6 flex-shrink-0 text-gray-800 dark:text-gray-200'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              <path d='M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z' />
              <path d='M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1' />
            </svg>
            <div className='grow'>
              <div className='text-xl font-semibold text-gray-800 dark:text-gray-200'>
                Stay Connected
              </div>
              <p className='mt-1 text-sm text-gray-500'>
                Let's stay connected on social.
              </p>

              <div className='mt-2 flex flex-wrap gap-x-3 gap-y-2'>
                {socialLink.map((social) => {
                  const SocialIcon = getIcon(social.label.toLowerCase());
                  return (
                    <UnstyledLink
                      key={social.label}
                      target='_blank'
                      href={social.link}
                      // className='hover:text-primary text-base-content cursor-newtab flex items-center gap-1'
                      className={cn(
                        'inline-flex items-center gap-x-1',
                        'text-sm font-medium',
                        'hover:text-primary text-gray-600 ',
                        'dark:hover:text-primary dark:text-gray-400',
                        'dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                      )}
                    >
                      {SocialIcon && <SocialIcon className='h-6 w-6' />}
                      {social.label}
                    </UnstyledLink>
                  );
                })}
              </div>
            </div>
          </div>
          {/* <!-- End Block 2 --> */}
        </div>
        {/* <!-- End Blocks --> */}

        {/* <!-- Form Contact --> */}
        <div className='flex flex-col rounded-lg border p-4 dark:border-gray-700 sm:p-6 lg:p-8'>
          <div className='mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200'>
            Fill in the form
          </div>

          <ContactForm />
        </div>
        {/* <!-- End Form Contact --> */}
      </div>
    </section>
    // </section>
  );
};

export default ContactSection;
