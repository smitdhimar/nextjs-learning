import { ReactNode } from "react"

interface blogsLayoutProps{
    children: React.ReactNode
}
const BlogsLayout = ({children}: blogsLayoutProps ) => {
  return (
    <div>
      blogs layout
      {children}
    </div>
  )
}

export default BlogsLayout
