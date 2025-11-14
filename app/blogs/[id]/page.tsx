'use client'
import { usePathname, useParams } from 'next/navigation'

export default function DynamicRoute() {
  const pathname = usePathname()
  const params = useParams()
  debugger
  return (
    <div>
      <h1>GeeksforGeeks</h1>
      <h2>Pathname: {pathname}</h2>
      <h2>Dynamic Parameter: {params.id}</h2>
    </div>
  )
}