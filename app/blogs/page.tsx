
import { getPosts } from '@/lib/api/jsonPlaceHolderSource'
const page = async () => {
  const posts = await getPosts();
  return (
    <div>
      blogs
    </div>
  )
}

export default page
