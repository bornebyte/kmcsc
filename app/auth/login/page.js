'use client'
import toast, { Toaster } from 'react-hot-toast';

const LoginComponent = () => {
    const handleForm = async (formData) => {
        let useremail = formData.get("email")
        let userpassword = formData.get("password")
        let res = await fetch(`/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                email: useremail,
                password: userpassword
            }),
        })
        let data = await res.json()
        if (data.uid) {
            toast.success("Login Successful")
            localStorage.setItem("useremail", data.email)
            localStorage.setItem("userpassword", data.password)
            window.location.reload()
        } else {
            toast.error("Invalid Credentials")
        }
    }
    return (
        <form className="w-[90vw] lg:w-[50vw] mx-auto" action={handleForm}>
            <Toaster />
            <div className="py-6 bg-gray-800 bg-opacity-50 rounded-lg px-8 flex-col mx-auto">
                <h2 className="text-white text-lg font-medium title-font mb-5 text-center">Login</h2>
                <div className="relative mb-4">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
                    <input required type="email" id="email" name="email" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-4">
                    <label htmlFor="password" className="leading-7 text-sm text-gray-400">Password</label>
                    <input required type="password" id="password" name="password" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <button type="submit" className="text-white w-full bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg text-center items-center">Login</button>
            </div>
        </form>
    )
}

export default LoginComponent