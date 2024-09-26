import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import AuthProvider from '@/providers/AuthProvider'
import './globals.scss'

export const metadata: Metadata = {
  title: 'Next Mui Chat app',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body>
          <main>{children}</main>
        </body>
      </AuthProvider>
    </html>
  )
}
