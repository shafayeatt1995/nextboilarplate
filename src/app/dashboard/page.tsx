import { redirect } from 'next/navigation'
import { serverAuth } from '@/services/nextAuth'

export default async function Dashboard() {
  const session = await serverAuth()
  if (!session?.user) {
    redirect('/login')
  }
  return (
    <div className=" container mx-auto">
      <h4>Dashboard</h4>
      <div>{JSON.stringify(session, null, 4)}</div>
    </div>
  )
}
