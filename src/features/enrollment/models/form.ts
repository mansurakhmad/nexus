import z from 'zod';

import { passwordSchema } from '@/shared/config';

export const zodSchema = z
  .object({
    email: z.email('Invalid format'),
    password: z.string('Password is required'),
    confirmPassword: passwordSchema,
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export namespace EnrollmentForm {
  export type FormValues = z.infer<typeof zodSchema>;

  export enum Fields {
    EMAIL = 'email',
    PASSWORD = 'password',
    CONFIRM_PASSWORD = 'confirmPassword',
  }
}
