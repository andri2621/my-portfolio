import React from 'react';

import ContactFormEmail from '@/components/emails/ContactFormEmail';

export default function EmailPreview() {
  const email = 'coba@test.com';
  const subject = 'Ini adalah Subject';
  const message =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi doloremque tenetur ratione enim labore, soluta nam placeat, quaerat perspiciatis iste omnis, quisquam aliquid numquam dicta autem velit';
  return (
    <div className='py-24'>
      <ContactFormEmail email={email} subject={subject} message={message} />
    </div>
  );
}
