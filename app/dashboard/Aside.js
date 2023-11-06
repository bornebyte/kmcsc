'use client'
import Link from "next/link"
import { AiFillHome, AiOutlineAppstoreAdd, AiOutlineClose } from "react-icons/ai"
import { BsPersonFillAdd } from "react-icons/bs"
import { IoMdSettings, IoMdNotifications } from "react-icons/io"
import { ImQuotesLeft } from "react-icons/im"
import { GiHamburgerMenu } from "react-icons/gi"
import { useState } from "react"

const Aside = () => {
    const [toggleSideBar, setToggleSideBar] = useState(false)
    return (
        <aside className='w-full bg-gray-900'>
            <div className="flex justify-end items-center text-white pr-12 text-4xl pb-6">
                {toggleSideBar ? <AiOutlineClose onClick={() => setToggleSideBar(!toggleSideBar)} /> : <GiHamburgerMenu onClick={() => setToggleSideBar(!toggleSideBar)} />}
            </div>
            {
                toggleSideBar && <div className="flex flex-col gap-6 py-8 px-6 min-h-screen">
                    <Link onClick={() => setToggleSideBar(false)} href={"/dashboard/home"} className='cursor-pointer w-full lg:w-[40vw] mx-auto h-12 bg-gray-800 text-white font-bold rounded-lg px-2 py-1 text-center flex justify-center items-center' ><div className="flex items-center justify-center gap-6"><div><AiFillHome className="text-2xl" /></div><div>Home</div></div></Link>
                    <Link onClick={() => setToggleSideBar(false)} href={"/dashboard/addpost"} className='cursor-pointer w-full lg:w-[40vw] mx-auto h-12 bg-gray-800 text-white font-bold rounded-lg px-2 py-1 text-center flex justify-center items-center' ><div className="flex items-center justify-center gap-6"><div><AiOutlineAppstoreAdd className="text-2xl" /></div><div>Add Post</div></div></Link>
                    <Link onClick={() => setToggleSideBar(false)} href={"/dashboard/addmember"} className='cursor-pointer w-full lg:w-[40vw] mx-auto h-12 bg-gray-800 text-white font-bold rounded-lg px-2 py-1 text-center flex justify-center items-center' ><div className="flex items-center justify-center gap-6"><div><BsPersonFillAdd className="text-2xl" /></div><div>Add Members</div></div></Link>
                    <Link onClick={() => setToggleSideBar(false)} href={"/dashboard/quotes"} className='cursor-pointer w-full lg:w-[40vw] mx-auto h-12 bg-gray-800 text-white font-bold rounded-lg px-2 py-1 text-center flex justify-center items-center' ><div className="flex items-center justify-center gap-6"><div><ImQuotesLeft className="text-2xl" /></div><div>Quotes</div></div></Link>
                    <Link onClick={() => setToggleSideBar(false)} href={"/dashboard/notification"} className='cursor-pointer w-full lg:w-[40vw] mx-auto h-12 bg-gray-800 text-white font-bold rounded-lg px-2 py-1 text-center flex justify-center items-center' ><div className="flex items-center justify-center gap-6"><div><IoMdNotifications className="text-2xl" /></div><div>Notifications</div></div></Link>
                    <Link onClick={() => setToggleSideBar(false)} href={"/dashboard/settings"} className='cursor-pointer w-full lg:w-[40vw] mx-auto h-12 bg-gray-800 text-white font-bold rounded-lg px-2 py-1 text-center flex justify-center items-center' ><div className="flex items-center justify-center gap-6"><div><IoMdSettings className="text-2xl" /></div><div>Settings</div></div></Link>
                </div>
            }
        </aside>
    )
}

export default Aside