import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { z } from 'zod'
import { schema } from './schema'
import { signInUser } from '../../services/user'
import { useLocation, useNavigate } from 'react-router'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { loginUser } from '../../redux/reducers/authReducer'
import { useAppDispatch } from '../../redux/hooks'

type Inputs = z.infer<typeof schema>

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  })
  const navigate = useNavigate()
  const location = useLocation()

  const { mutate } = useMutation({
    mutationKey: ['login'],
    mutationFn: (credentials: Inputs) => signInUser(credentials),
    onSuccess: (user) => {
      const nextRoute = location.state?.from ?? '/profile'
      dispatch(loginUser(user.accessToken))
      navigate(nextRoute, { replace: true })
    },
    onError: (error) => {
      console.log(error)
      toast.error(error.message)
    },
  })

  const dispatch = useAppDispatch()

  const onSubmit: SubmitHandler<Inputs> = async (credentials) => {
    mutate(credentials)
  }

  return (
    <section className='flex items-center justify-center h-screen'>
      <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
        <h1 className='text-2xl font-bold mb-6 text-center text-gray-700'>Login</h1>
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
          <div className='flex items-center justify-between'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Login
