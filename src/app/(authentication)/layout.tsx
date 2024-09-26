import Header from '@/components/global/Header'
import { ReactNode } from 'react'

function AuthLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <Header />

      <div className="container flex flex-col items-center h-[calc(100vh_-_64px)] justify-center">
        <div className=" mt-2 flex flex-col items-center p-5 border shadow-lg rounded-xl">
          {children}
        </div>
      </div>
    </>
  )
}

export default AuthLayout
