'use client'

import Link from 'next/link'
import React from 'react'
import { useSession, signOut } from 'next-auth/react'

const buttonStyle = {}

function LoginButton() {
  const { status } = useSession()
  return (
    <>
      {status !== 'authenticated' ? (
        <>
          <Link href="/login">Login</Link>
        </>
      ) : (
        <>
          <Link href="/dashboard">Dashboard</Link>
          <button onClick={() => signOut()}>Logout</button>
        </>
      )}
    </>
  )
}

export default LoginButton
