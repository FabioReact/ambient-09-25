import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { z } from 'zod'
import { schema } from './schema'

type Inputs = z.infer<typeof schema>

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  })

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <section className='flex items-center justify-center h-screen'>
      <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
        <h1 className='text-2xl font-bold mb-6 text-center text-gray-700'>Register</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className='mb-4'>
            <label className='block text-gray-600 text-sm font-bold mb-2' htmlFor='email'>
              Email
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              type='email'
              placeholder='Email'
              {...register('email')}
            />
            {errors.email && <p className='text-red-500 text-xs italic'>{errors.email.message}</p>}
          </fieldset>
          <fieldset className='mb-6'>
            <label className='block text-gray-600 text-sm font-bold mb-2' htmlFor='password'>
              Password
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              id='password'
              type='password'
              placeholder='******************'
              {...register('password')}
            />
            {errors.password && (
              <p className='text-red-500 text-xs italic'>{errors.password.message}</p>
            )}
          </fieldset>
          <fieldset className='mb-6'>
            <label
              className='block text-gray-600 text-sm font-bold mb-2'
              htmlFor='passwordConfirmation'
            >
              Confirm Password
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              id='passwordConfirmation'
              type='password'
              placeholder='******************'
              {...register('passwordConfirmation')}
            />
            {errors.passwordConfirmation && (
              <p className='text-red-500 text-xs italic'>{errors.passwordConfirmation.message}</p>
            )}
          </fieldset>
          <div className='flex items-center justify-between'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'
            >
              Sign Up
            </button>
          </div>
          {isSubmitSuccessful && (
            <p className='text-green-500 text-xs italic mt-4'>Creation successful</p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Register
