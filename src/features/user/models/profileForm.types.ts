import z from 'zod';

export const zodSchema = z.object({
  firstName: z.string().nonempty('First name is required'),
  lastName: z.string().nonempty('Last name is required'),
  birthday: z.date().max(new Date(), 'Birthday must be in the past'),
  gender: z.string().nonempty('Gender is required'),
  username: z.string().max(15, 'Max 15 characters').nonempty('Username is required'),
  email: z.email('Invalid format'),
  phoneCode: z.number('Required').max(9999, 'Code should have max 4 numbers'),
  phoneNumber: z.number('Required').max(9999999999, 'Number should have max 10 digits'),
});

export namespace ProfileForm {
  export type FormValues = z.infer<typeof zodSchema>;
}
