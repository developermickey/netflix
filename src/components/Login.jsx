import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }

  return (
    <div className='relative min-h-screen w-full'>
      {/* Background image */}
      <div className='absolute inset-0'>
        <img
          className='h-full w-full object-cover'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/a565a928-abda-47bd-860a-55be00b7fefc/web/IN-en-20260615-TRIFECTA-perspective_7ffb95f0-7b86-4dfa-9920-7f5651418d65_large.jpg'
          alt='background'
        />
        <div className='absolute inset-0 bg-black/65'></div>
      </div>

      {/* Header */}
      <div className='relative z-20'>
        <Header />
      </div>

      {/* Auth section */}
      <div className='relative z-10 flex min-h-screen items-center justify-center px-4 py-20'>
        <form className='w-full max-w-md rounded-md bg-black/55 px-8 py-10 text-white shadow-2xl backdrop-blur-sm'>
          <h1 className='mb-8 text-3xl font-bold'>
            {isSignInForm ? 'Sign In' : 'Sign Up'}
          </h1>

          <div className='space-y-4'>
            {!isSignInForm && (
              <input
                type='text'
                placeholder='Full Name'
                className='h-14 w-full rounded-md border border-zinc-600 bg-zinc-800/80 px-4 text-white outline-none transition focus:border-white focus:bg-zinc-700 placeholder:text-zinc-400'
              />
            )}

            <input
              type='text'
              placeholder='Email or phone number'
              className='h-14 w-full rounded-md border border-zinc-600 bg-zinc-800/80 px-4 text-white outline-none transition focus:border-white focus:bg-zinc-700 placeholder:text-zinc-400'
            />

            <input
              type='password'
              placeholder='Password'
              className='h-14 w-full rounded-md border border-zinc-600 bg-zinc-800/80 px-4 text-white outline-none transition focus:border-white focus:bg-zinc-700 placeholder:text-zinc-400'
            />

            {!isSignInForm && (
              <input
                type='password'
                placeholder='Confirm Password'
                className='h-14 w-full rounded-md border border-zinc-600 bg-zinc-800/80 px-4 text-white outline-none transition focus:border-white focus:bg-zinc-700 placeholder:text-zinc-400'
              />
            )}

            <button
              type='submit'
              className='h-12 w-full rounded-md bg-red-600 text-lg font-semibold transition hover:bg-red-700'
            >
              {isSignInForm ? 'Sign In' : 'Sign Up'}
            </button>
          </div>

          {/* Extra section */}
          {isSignInForm ? (
            <div className='mt-4 flex items-center justify-between text-sm text-zinc-400'>
              <label className='flex cursor-pointer items-center gap-2'>
                <input type='checkbox' className='accent-red-600' />
                Remember me
              </label>

              <p className='cursor-pointer hover:underline'>Need Help?</p>
            </div>
          ) : (
            <div className='mt-4 text-sm text-zinc-400'>
              <label className='flex cursor-pointer items-start gap-2'>
                <input type='checkbox' className='mt-1 accent-red-600' />
                <span>
                  I agree to the{' '}
                  <span className='cursor-pointer text-white hover:underline'>
                    Terms of Use
                  </span>{' '}
                  and{' '}
                  <span className='cursor-pointer text-white hover:underline'>
                    Privacy Policy
                  </span>
                </span>
              </label>
            </div>
          )}

          {/* Toggle text */}
          <div className='mt-8 text-zinc-400'>
            {isSignInForm ? (
              <p>
                New to Netflix?{' '}
                <span
                  onClick={toggleSignInForm}
                  className='cursor-pointer font-medium text-white hover:underline'
                >
                  Sign up now
                </span>
              </p>
            ) : (
              <p>
                Already have an account?{' '}
                <span
                  onClick={toggleSignInForm}
                  className='cursor-pointer font-medium text-white hover:underline'
                >
                  Sign in now
                </span>
              </p>
            )}

            <p className='mt-4 text-xs leading-5 text-zinc-500'>
              This page is protected by Google reCAPTCHA to ensure you're not a bot.
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login