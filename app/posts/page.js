'use client'
import { useEffect, useState } from "react"

const Post = () => {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const fetchposts = () => {
    console.log(page)
    try {
      fetch(`/api/posts?page=${page}`, { cache: 'no-store' }).then(res => {
        res.json().then(data => setPosts(prev => [...prev, ...data]))
      })
    } catch (error) {
      console.error(error)
    }
  }
  const hadleInfinityScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop > document.documentElement.scrollHeight - 30) {
      setPage(page + 1)
    }
  }
  useEffect(() => {
    fetchposts()
  }, [page])
  useEffect(() => {
    window.addEventListener("scroll", hadleInfinityScroll)
    return () => window.removeEventListener("scroll", hadleInfinityScroll)
  }, [])
  return (
    <div className="min-h-screen bg-gray-900 text-gray-400">
      <div className="w-full py-1">
        {/* Heading */}
        <h1 className="text-4xl text-white text-center font-bold my-8">Posts</h1>
        {/* Posts Div */}
        {posts &&
          posts.map((post, i) => {
            return (
              <div key={i} className="mx-auto w-[90vw] lg:w-[60vw] px-6 py-4 border-blue-400 rounded-lg bg-gray-800 bg-opacity-40 my-12">
                {/* Informations about posts */}
                <div className="flex-col justify-between items-center">
                  <div>{new Date(post.createdAt).toLocaleString()}</div>
                  <div>By {post.author}</div>
                </div>
                {/* Posts contents */}
                <div>
                  <div className="py-4 text-white font-bold text-xl">{post.title}</div>
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