import { z, object, string, TypeOf } from 'zod';

export const UserSchema = z.object({
  id: z.number(),
  email: z.string(),
  password: string(),
});


export const createUserSchema = object({
  body: object({
    firstName: string({
      required_error: 'Please provide a first name',
    }),
    lastName: string({
      required_error: 'Please provide a last name',
    }),
    email: string({
      required_error: 'You must provide a valid email address',
    }).email('The email address you provided is not a valid email'),
    password: string({
      required_error: 'You must provide a valid password',
    }).min(6, 'Password is too short - should be min 6 characters').optional(),
    passwordConfirmation: string({
      required_error: 'Password confirmation is required',
    }).optional(),
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: 'Passwords do not match',
    path: ['passwordConfirmation'],
  }),
});

export type UserType = z.infer<typeof UserSchema>;