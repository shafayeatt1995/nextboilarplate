// eslint-disable-next-line no-unused-vars
import NextAuth from 'next-auth'

declare module 'next-auth' {
  // eslint-disable-next-line no-unused-vars
  interface Session {
    user: {
      _id: string
      name: string
      email: string
      type: string
      socialAccount: boolean
      provider: string
      accessToken: string
    }
  }
}
