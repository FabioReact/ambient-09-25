import z from 'zod'

export const schema = z
  .object({
    email: z.email(),
    password: z
      .string()
      .min(6)
      .max(100)
      .regex(/^(?=.*[A-Z]).*$/, {
        error: 'Password must contain at least one uppercase letter',
      })
      .regex(/^(?=.*[a-z]).*$/, {
        error: 'Password must contain at least one lowercase letter',
      })
      .regex(/^(?=.*[0-9]).*$/, {
        error: 'Password must contain at least one digit',
      }),
    passwordConfirmation: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    error: 'Passwords do not match',
    path: ['passwordConfirmation'],
  })
