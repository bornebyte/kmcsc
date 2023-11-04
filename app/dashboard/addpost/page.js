'use client'
import toast, { Toaster } from 'react-hot-toast';

export default function CreatePost() {
    const handleForm = async (formData) => {
        let res = await fetch(`/api/posts`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                title: formData.get("post-topic"),
                content: formData.get("post-description"),
                author: formData.get("post-author"),
            }),
        })
        let data = await res.json()
        if (data.uid) {
            toast.success("Post Added Successfully")
        }
    }
    return (
        <div className="text-gray-400 bg-gray-900 w-full">
            <Toaster />
            <form className="w-[90vw] mx-auto" action={handleForm}>
                <div className="py-6 bg-gray-800 bg-opacity-50 rounded-lg px-8 flex-col mx-auto">
                    <h2 className="text-white text-lg font-medium title-font mb-5 text-center">New Post</h2>
                    <div className="relative mb-4">
                        <label htmlFor="post-topic" className="leading-7 text-sm text-gray-400">Topic</label>
                        <input type="text" id="post-topic" name="post-topic" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="post-description" className="leading-7 text-sm text-gray-400">Description</label>
                        <textarea id="post-description" name="post-description" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="post-author" className="leading-7 text-sm text-gray-400">Author</label>
                        <input type="text" id="post-author" name="post-author" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <button type="submit" className="text-white w-full bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg text-center items-center">Post</button>
                </div>
            </form>
        </div>
    );
}