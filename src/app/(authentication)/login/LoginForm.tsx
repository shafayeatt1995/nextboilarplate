'use client' // Make sure this is the first line in the file

import React, { FormEvent, useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { setItem } from '@/utils'

export default function LoginForm() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    res?.error ? '' : router.push('/dashboard')
  }
  const socialSignIn = (provider: string): void => {
    const { pathname, search } = new URL(window.location.href)

    setItem('socialLogin', pathname + search)
    window.open(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/social-login/${provider}`,
      '_self'
    )
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input
          required
          id="email"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          required
          name="password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
      <button
        className=" mt-5 bg-red-600"
        onClick={() => socialSignIn('google')}
      >
        Google login
      </button>
    </div>
  )
}
