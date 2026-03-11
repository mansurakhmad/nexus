import z from 'zod';

export const zodSchema = z
  .object({
    password: z.string(),
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export namespace RecoveryPasswordForm {
  export enum FormFields {
    PASSWORD = 'password',
    CONFIRM_PASSWORD = 'confirmPassword',
  }
}
