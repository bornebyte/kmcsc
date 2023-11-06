'use client'
import toast, { Toaster } from 'react-hot-toast';

const ResetPasswordComponent = () => {
    const handleForm = async () => {
        toast.success("Reset request sent")
    }
    return (
        <form className="w-[90vw] lg:w-[50vw] mx-auto" action={handleForm}>
            <Toaster />
            <div className="py-6 bg-gray-800 bg-opacity-50 rounded-lg px-8 flex-col mx-auto">
                <h2 className="text-white text-lg font-medium title-font mb-5 text-center">Reset Password</h2>
                <div className="relative mb-4">
                    <label htmlFor="username" className="leading-7 text-sm text-gray-400">Email</label>
                    <input type="email" id="username" name="username" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <button type="submit" className="text-white w-full bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg text-center items-center">Send reset request</button>
            </div>
        </form>
    )
}

export default ResetPasswordComponent