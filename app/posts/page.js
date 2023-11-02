import getPosts from "./getPosts"

const Post = async () => {
  let posts = await getPosts()
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
                  <div>{post.author}</div>
                </div>
                {/* Posts contents */}
                <div>
                  <div className="py-4 text-center text-white font-bold text-xl">{post.title}</div>
                  <div>
                    {post.content}
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