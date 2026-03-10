import z from 'zod';

export const zodSchema = z.object({
  email: z.email('Invalid format'),
});

export namespace ForgotPasswordForm {
  export type FormValues = z.infer<typeof zodSchema>;

  export enum Fields {
    EMAIL = 'email',
  }
}
