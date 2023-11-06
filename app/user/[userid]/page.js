import { CgProfile } from "react-icons/cg"

const Usercomponent = async ({ params }) => {
    let res = await fetch(`${process.env.HOST_URL}/api/user/${params.userid}`)
    // let data = await res.json()
    return (
        <div className='min-h-screen bg-gray-900 text-gray-400'>
            <div className="flex flex-col justify-between items-center gap-12 py-8 bg-gray-800 bg-opacity-50 rounded-lg w-[90vw] mx-auto">
                <div><CgProfile className="text-5xl text-center" /></div>
                <div>ID : {params.userid}</div>
            </div>
        </div>
    )
}

export default Usercomponent