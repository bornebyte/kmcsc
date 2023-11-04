'use client'
import toast, { Toaster } from 'react-hot-toast';

const Addquotescomponent = () => {
    const handleForm = async (formData) => {
        let res = await fetch(`/api/quotes`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ quote: formData.get('quotesname') }),
        })
        let data = await res.json()
        if (data.uid) {
            toast.success("Quote Added Successfully")
        }
    }
    return (
        <form className="text-gray-400 bg-gray-900 body-font w-[90vw] mx-auto" action={handleForm}>
            <Toaster />
            <div className="py-6 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                <h2 className="text-white text-lg font-medium title-font mb-5 text-center">Add New Quotes</h2>
                <div className="relative mb-4">
                    <label htmlFor="quotesname" className="leading-7 text-sm text-gray-400">Your Quote</label>
                    <input type="text" id="quotesname" name="quotesname" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Add</button>
            </div>
        </form>
    )
}

export default Addquotescomponent