import Header from '@/components/global/Header'
import { ReactNode } from 'react'

function AuthLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default AuthLayout
