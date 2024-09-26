'use client'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { getItem, getQuery, removeItem } from '@/utils'
import { useEffect } from 'react'

export default function CheckLogin() {
  const router = useRouter()

  useEffect(() => {
    const handleCheckRoute = async () => {
      await checkRoute()
    }

    handleCheckRoute()
  }, [])

  const checkRoute = async () => {
    const socialLogin = getItem('socialLogin')
    try {
      const query = getQuery(window.location.href)
      const { c, e } = query
      if (e) {
        if (socialLogin) {
          removeItem('socialLogin')
          router.push(socialLogin)
        } else {
          router.push('/')
        }
      } else if (c) {
        const { email, id, provider } = JSON.parse(atob(c))
        const res = await signIn('credentials', {
          email,
          id,
          provider,
          password: 'f*#k you',
          redirect: false,
        })

        res?.error ? '' : router.push('/dashboard')
        if (socialLogin) {
          removeItem('socialLogin')
          router.push(socialLogin)
        } else {
          router.push('/')
        }
      } else {
        router.push('/')
      }
    } catch (error) {
      removeItem('socialLogin')
      if (socialLogin) {
        router.push(socialLogin)
      } else {
        router.push('/')
      }
    }
  }

  return (
    <>
      <h1 onClick={checkRoute}>Ami login check</h1>
    </>
  )
}

// http://localhost:8080/social-login?c=eyJlbWFpbCI6InNoYWZheWV0YWxhbmlrQGdtYWlsLmNvbSIsImlkIjoiMTA3OTEzNTg3ODU1MDk2NDE5ODIwIiwicHJvdmlkZXIiOiJnb29nbGUiLCJrZXkiOiJmc2w5dWFvZWI1ZmV6ZmF3N3hqcCJ9
