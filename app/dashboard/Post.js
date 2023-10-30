'use client'

export default async function CreatePost() {
    // const [postdata, setPostdata] = useState({
    //     id: "",
    //     title: "",
    //     content: "",
    //     author: "",
    // })
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // const formData = new FormData(e.target);
            const formData = new FormData(e.currentTarget)
            const response = await fetch('/api/post', {
                method: 'POST',
                body: formData,
            })
            const data = await response.json()
            console.log("response ", data)
        } catch (error) {
            console.error("Dashboard/Post ", error)
        }
    }
    return (
        <form class="text-gray-400 bg-gray-900 body-font my-12" onSubmit={handleSubmit}>
            <div class="py-6 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                <h2 class="text-white text-lg font-medium title-font mb-5">New Post</h2>
                <div class="relative mb-4">
                    <label for="post-topic" class="leading-7 text-sm text-gray-400">Topic</label>
                    <input type="text" id="post-topic" name="post-topic" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div class="relative mb-4">
                    <label for="post-description" class="leading-7 text-sm text-gray-400">Description</label>
                    <textarea id="post-description" name="post-description" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div class="relative mb-4">
                    <label for="post-author" class="leading-7 text-sm text-gray-400">Author</label>
                    <input type="text" id="post-author" name="post-author" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <button type="submit" class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Post</button>
            </div>
        </form>
    );
}