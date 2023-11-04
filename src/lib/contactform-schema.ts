import { z } from 'zod';

export const ContactFormSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Invalid email address')
    .trim()
    .toLowerCase(),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(6, 'Message must be at least 6 characters.'),
});
