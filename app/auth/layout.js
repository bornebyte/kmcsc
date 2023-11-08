import Link from "next/link"

export default function AuthLayout({ children }) {
    return (
        <div className="bg-gray-900 min-h-screen">
            <div className="py-10">
                <div className="bg-gray-800 w-[90vw] lg:w-[60vw] rounded-lg mx-auto">
                    <div className="flex justify-end items-center">
                        <Link className="px-4 py-2 rounded-md hover:bg-opacity-5 hover:bg-white" href={"login"}>Login</Link>
                        <Link href={"resetpassword"} className="px-4 py-2 rounded-md hover:bg-opacity-5 hover:bg-white" >Reset password</Link>
                    </div>
                    {/* line */}
                    <div className="w-full h-1 bg-indigo-500 rounded-full mb-2 mx-auto"></div>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}