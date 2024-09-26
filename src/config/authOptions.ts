import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { login } from '@/api/auth'

export const authOptions: NextAuthOptions = {
  pages: { signIn: '/login', newUser: '/signup' },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},
      async authorize(credentials, req) {
        const { email, password, id, provider } = credentials as {
          email: string
          password: string
          id?: string
          provider?: string
        }
        try {
          const res = await login({ email, password, id, provider })
          if (!res.ok) {
            return null
          }
          return await res.json()
        } catch (e) {
          return null
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user }
    },
    async session({ session, token }) {
      const { _id, name, email, type, socialAccount, provider } =
        token.user as typeof session.user
      const accessToken = token.token as string

      session.user = {
        _id,
        name,
        email,
        type,
        socialAccount,
        provider,
        accessToken,
      }
      return session
    },
  },
}
