import z from 'zod';

export const passwordSchema = z
  .string('Password is required')
  .regex(/[A-Z]/, 'At least one uppercase letter')
  .regex(/[a-z]/, 'At least one lowercase letter')
  .regex(/[0-9]/, 'At least one number')
  .regex(/^.{8,}$/, 'At least 8 characters')
  .regex(/[!#%$]/, 'At least one special character');
