export async function login({
  email,
  password,
  id,
  provider,
}: {
  email: string
  password: string
  id?: string
  provider?: string
}) {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password, id, provider }),
  })
}

export async function register({
  email,
  password,
  name,
}: {
  email: string
  password: string
  name: string
}) {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password, name }),
  })
}
