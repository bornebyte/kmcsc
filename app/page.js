import About from "./about/page";
import Post from "./posts/page";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-900 text-gray-400 min-h-screen">
      <div className="flex justify-between items-center px-20 py-12">
        <div className="mx-4">
          <h1 className="text-4xl text-white text-center my-4">KMC Students Committee</h1>
          <p className="text-gray-400">We are the voice of KMC students, and we are here to make your student experience the best it can be.</p>
        </div>
        <div>
          <Image className="rounded-lg" src={"/computer-club.jpg"} alt="Computer Club" height={500} width={500} priority />
        </div>
      </div>
      <About />
      <Post />
    </div>
  )
}

