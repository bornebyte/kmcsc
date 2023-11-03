import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { BiBookmark, BiComment } from "react-icons/bi"
import { revalidatePath } from 'next/cache'

const Post = async () => {
  // const { signal } = new AbortController()
  // fetch(url, { signal })
  const res = await fetch('http://localhost:3000/api/posts?limit=2', { cache: 'no-store' });
  const posts = await res.json()
  return (
    <div className="min-h-screen bg-gray-900 text-gray-400">
      <div className="w-[60vw] mx-auto py-8">
        {/* Heading */}
        <h1 className="text-4xl text-white text-center font-bold my-8">Posts</h1>
        {/* Posts Div */}
        {
          posts.map((post) => {
            return (
              <div key={post._id.toString()} className="w-full px-6 py-4 border-blue-400 rounded-lg bg-gray-800 bg-opacity-40 my-12">
                {/* Informations about posts */}
                <div className="flex justify-between items-center">
                  <div>{post.createdAt.toLocaleString()}</div>
                  <div>By {post.author}</div>
                </div>
                {/* Posts contents */}
                <div>
                  <div className="py-4 text-white font-bold text-xl">{post.title}</div>
                  <div>
                    {post.content}
                  </div>
                </div>
                <div className="w-full bg-violet-700 rounded-full h-1 px-4 mt-4"></div>
                <div className="my-2 text-2xl flex justify-between items-center">
                  <div className="flex gap-6">
                    <div className="text-center flex justify-center items-center flex-col">
                      <AiOutlineHeart className="text-red-500" />
                      <div className="text-base">0</div>
                    </div>
                    <div className="text-center flex justify-center items-center flex-col">
                      <BiComment />
                      <div className="text-base">0</div>
                    </div>
                  </div>
                  <div>
                    <BiBookmark />
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Post