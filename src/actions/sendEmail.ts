'use server';

import { Resend } from 'resend';
import { z } from 'zod';

import { ContactFormSchema } from '@/lib/contactform-schema';

import ContactFormEmail from '@/components/emails/ContactFormEmail';

type ContactFormInputs = z.infer<typeof ContactFormSchema>;
const resend = new Resend(process.env.RESEND_API_KEY);
const MyEmail = process.env.EMAIL_ADDRESS;

export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data);

  if (result.success) {
    const { email, subject, message } = result.data;
    try {
      const data = await resend.emails.send({
        from: 'Awandri.com <awandri@resend.dev>',
        to: [`${MyEmail}`],
        subject: subject,
        reply_to: email,

        text: `Email: ${email}\nSubject: ${subject}\nMessage: ${message}`,
        react: ContactFormEmail({ email, subject, message }),
      });
      return { success: true, data };
    } catch (error) {
      return { success: false, error };
    }
  }

  if (result.error) {
    return { success: false, error: result.error.format() };
  }
}
