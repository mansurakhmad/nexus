import z from 'zod';

export const forgotPasswordFormSchema = z.object({
  email: z.email('Invalid format'),
});

export namespace ForgotPasswordForm {
  export type FormValues = z.infer<typeof forgotPasswordFormSchema>;
}
