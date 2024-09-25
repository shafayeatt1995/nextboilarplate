import LoginForm from '@/app/(authentication)/login/LoginForm'
import { serverAuth } from '@/services/nextAuth'
import { redirect } from 'next/navigation'
async function Login() {
  const session = await serverAuth()
  if (session?.user) {
    redirect('/dashboard')
  }
  return (
    <>
      <h1>Login</h1>
      <LoginForm />
    </>
  )
}

export default Login
