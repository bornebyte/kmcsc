import Link from "next/link"
import { AiFillHome, AiOutlineAppstoreAdd } from "react-icons/ai"
import { BsPersonFillAdd } from "react-icons/bs"
import { IoMdSettings, IoMdNotifications } from "react-icons/io"
import { ImQuotesLeft } from "react-icons/im"

const Aside = () => {
    return (
        <aside className='h-full w-72 bg-gray-950' style={{ borderTopRightRadius: "20px", borderBottomRightRadius: "20px" }}>
            <div className="lists flex flex-col gap-6 py-8 px-6">
                <Link href={"/dashboard/home"} className='cursor-pointer w-full h-12 bg-gray-800 text-white font-bold rounded-lg px-2 py-1 text-center flex justify-center items-center' ><div className="flex items-center justify-center gap-6"><div><AiFillHome className="text-2xl" /></div><div>Home</div></div></Link>
                <Link href={"/dashboard/addpost"} className='cursor-pointer w-full h-12 bg-gray-800 text-white font-bold rounded-lg px-2 py-1 text-center flex justify-center items-center' ><div className="flex items-center justify-center gap-6"><div><AiOutlineAppstoreAdd className="text-2xl" /></div><div>Add Post</div></div></Link>
                <Link href={"/dashboard/addmember"} className='cursor-pointer w-full h-12 bg-gray-800 text-white font-bold rounded-lg px-2 py-1 text-center flex justify-center items-center' ><div className="flex items-center justify-center gap-6"><div><BsPersonFillAdd className="text-2xl" /></div><div>Add Members</div></div></Link>
                <Link href={"/dashboard/quotes"} className='cursor-pointer w-full h-12 bg-gray-800 text-white font-bold rounded-lg px-2 py-1 text-center flex justify-center items-center' ><div className="flex items-center justify-center gap-6"><div><ImQuotesLeft className="text-2xl" /></div><div>Quotes</div></div></Link>
                <Link href={"/dashboard/notification"} className='cursor-pointer w-full h-12 bg-gray-800 text-white font-bold rounded-lg px-2 py-1 text-center flex justify-center items-center' ><div className="flex items-center justify-center gap-6"><div><IoMdNotifications className="text-2xl" /></div><div>Notifications</div></div></Link>
                <Link href={"/dashboard/settings"} className='cursor-pointer w-full h-12 bg-gray-800 text-white font-bold rounded-lg px-2 py-1 text-center flex justify-center items-center' ><div className="flex items-center justify-center gap-6"><div><IoMdSettings className="text-2xl" /></div><div>Settings</div></div></Link>
            </div>
        </aside>
    )
}

export default Aside