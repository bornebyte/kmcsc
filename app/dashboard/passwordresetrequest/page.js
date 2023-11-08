'use client'
import { MdDelete } from "react-icons/md"
import { IoMdDoneAll } from "react-icons/io"
import { useState, useEffect } from "react"
import toast, { Toaster } from 'react-hot-toast';

const ResetPasswordComponent = () => {
    const [notificationsdata, setNotificationsdata] = useState([])
    useEffect(() => {
        fetch(`/api/auth/resetpasswordrequest`, { cache: 'no-store' }).then(res => {
            res.json().then(data => setNotificationsdata(data.requestsdata))
        })
    }, [])
    return (
        <div className='bg-gray-900 text-gray-400 min-h-screen'>
            <Toaster />
            <div className='text-center text-white text-3xl font-bold py-4'>Password Reset Requests</div>
            <div className='pb-1'>
                {
                    notificationsdata.map((i) => {
                        return (
                            <div className='card bg-gray-800 p-4 flex justify-between items-center rounded-lg mt-6 px-4 w-[90vw] lg:w-[60vw] mx-auto' key={i._id.toString()}>
                                <div>
                                    <div className="date my-2 mb-2 text-base">{new Date(i.createdAt).toLocaleString()}</div>
                                    <div className="text-xl">{i.email}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ResetPasswordComponent