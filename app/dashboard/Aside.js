import Link from "next/link"

const Aside = () => {
    return (
        <aside className='h-full w-72 bg-gray-950' style={{borderTopRightRadius:"20px",borderBottomRightRadius:"20px"}}>
            <div className="lists flex flex-col gap-6 py-8 px-6">
                <Link href={"/dashboard/home"} className='cursor-pointer w-full h-12 bg-gray-800 text-white font-bold rounded-lg px-2 py-1 text-center flex justify-center items-center' >Home</Link>
                <Link href={"/dashboard/addpost"} className='cursor-pointer w-full h-12 bg-gray-800 text-white font-bold rounded-lg px-2 py-1 text-center flex justify-center items-center' >Add Post</Link>
                <Link href={"/dashboard/addmember"} className='cursor-pointer w-full h-12 bg-gray-800 text-white font-bold rounded-lg px-2 py-1 text-center flex justify-center items-center' >Add Members</Link>
                <Link href={"/dashboard/settings"} className='cursor-pointer w-full h-12 bg-gray-800 text-white font-bold rounded-lg px-2 py-1 text-center flex justify-center items-center' >Settings</Link>
                <Link href={"/dashboard/notification"} className='cursor-pointer w-full h-12 bg-gray-800 text-white font-bold rounded-lg px-2 py-1 text-center flex justify-center items-center' >Notification</Link>
                <div className='cursor-pointer w-full h-12 bg-gray-800 text-white font-bold rounded-lg px-2 py-1 text-center flex justify-center items-center' >Toggle Modal</div>
            </div>
        </aside>
    )
}

export default Aside