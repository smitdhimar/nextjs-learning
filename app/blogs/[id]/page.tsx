'use client'
import { usePathname, useParams } from 'next/navigation'
import { getPosts } from '@/lib/api/jsonPlaceHolderSource'
import { useEffect, useState } from 'react'
import GlobalLoading from '@/app/loading'

const  DynamicRoute= ()=> {
  const pathname = usePathname()
  const params = useParams()
  const [title, setTitle] = useState(undefined)
  useEffect(()=>{
    const fetchPost=async()=>{
      try{
        const result = await getPosts(Number(params?.id) || undefined)
        if(!result?.title)
        {
          console.warn("No title found")
        }
        setTitle(result.title);
      }
      catch(e){
        console.error("There is some error: ", e)
      }
    }
    fetchPost();
  }, [])
  if(!title){
    return <GlobalLoading/>
  }
  return (
    <div>
      <h1>GeeksforGeeks</h1>
      <h2>Pathname: {pathname}</h2>
      <h2>Dynamic Parameter: {params.id}</h2>
      <h2>title: {title}</h2>
    </div>
  )
}
export default DynamicRoute;