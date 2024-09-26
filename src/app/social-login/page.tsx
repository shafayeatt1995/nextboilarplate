import { serverAuth } from '@/services/nextAuth'
import { redirect } from 'next/navigation'
import CheckLogin from '@/components/CheckLogin'

export default async function SocialLogin() {
  const session = await serverAuth()

  if (session?.user) {
    redirect('/dashboard')
  }

  return (
    <>
      <CheckLogin />
    </>
  )
}

// http://localhost:8080/social-login?c=eyJlbWFpbCI6InNoYWZheWV0YWxhbmlrQGdtYWlsLmNvbSIsImlkIjoiMTA3OTEzNTg3ODU1MDk2NDE5ODIwIiwicHJvdmlkZXIiOiJnb29nbGUiLCJrZXkiOiJ1dTdzOXEyeGE5dzYzNTB1Z3dtcyJ9
