import { useState } from 'react'

const Register = () => {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState<{ ref: string; message: string }[]>([])
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState<{ ref: string; message: string }[]>([])
  const [isSuccess, setIsSuccess] = useState(false)

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value
    const errors = []
    if (email.length < 8) {
      errors.push({ ref: 'length', message: 'Email must be at least 8 characters long' })
    }
    if (!email.includes('@')) {
      errors.push({ ref: '@char', message: 'Email must contain @' })
    }
    if (!email.includes('.')) {
      errors.push({ ref: '.char', message: 'Email must contain .' })
    }
    setEmailError(errors)
    setEmail(event.target.value)
  }

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value
    const errors = []
    if (!/[A-Z]/.test(password)) {
      errors.push({
        ref: 'uppercase',
        message: 'Password must contain at least one uppercase letter',
      })
    }
    if (!/[a-z]/.test(password)) {
      errors.push({
        ref: 'lowercase',
        message: 'Password must contain at least one lowercase letter',
      })
    }
    if (!/[0-9]/.test(password)) {
      errors.push({ ref: 'digit', message: 'Password must contain at least one digit' })
    }
    setPasswordError(errors)
    setPassword(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSuccess(passwordError.length === 0 && emailError.length === 0)
    console.log(email, password)
  }

  return (
    <section className='flex items-center justify-center h-screen'>
      <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
        <h1 className='text-2xl font-bold mb-6 text-center text-gray-700'>Register</h1>
        <form onSubmit={handleSubmit}>
          <fieldset className='mb-4'>
            <label className='block text-gray-600 text-sm font-bold mb-2' htmlFor='email'>
              Email
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              type='email'
              placeholder='Email'
              value={email}
              onChange={onEmailChange}
            />
            {emailError &&
              emailError.map((error) => (
                <p key={error.ref} className='text-red-500 text-xs italic'>
                  {error.message}
                </p>
              ))}
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
              value={password}
              onChange={onPasswordChange}
            />
            {passwordError &&
              passwordError.map((error) => (
                <p key={error.ref} className='text-red-500 text-xs italic'>
                  {error.message}
                </p>
              ))}
          </fieldset>
          <div className='flex items-center justify-between'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'
            >
              Sign Up
            </button>
          </div>
          {isSuccess && <p className='text-green-500 text-xs italic mt-4'>Creation successful</p>}
        </form>
      </div>
    </section>
  )
}

export default Register
