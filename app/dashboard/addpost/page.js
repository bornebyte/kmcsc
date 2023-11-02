'use client'
import saveData from "./saveData"

export default function CreatePost() {
    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const title = e.target[0].value
        const content = e.target[1].value
        const author = e.target[2].value
        let res = saveData(title, content, author)
    }
    return (
        <form className="text-gray-400 bg-gray-900 body-font my-12" onSubmit={handleFormSubmit}>
            <div className="py-6 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
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
                <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Post</button>
            </div>
        </form>
    );
}