
import { getPosts } from '@/lib/api/jsonPlaceHolderSource'
import ListPage from './components/listPage';
const page = async () => {
  const posts = await getPosts();
  console.log('posts', posts)
  return (
    <div>
      <ListPage blogs={posts} />
    </div>
  )
}

export default page
