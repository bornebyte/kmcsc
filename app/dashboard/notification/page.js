import React from 'react'
import { MdDelete } from "react-icons/md"

const Notification = async () => {
  let res = {}
  let notificationsdata = []
  try {
    res = await fetch(`${process.env.HOST_URL}/api/notifications?limit=20`, { cache: 'no-store' });
    notificationsdata = await res.json()
  } catch (error) {
    console.error(error)
  }
  return (
    <div className='container'>
      <div className='text-center text-white text-3xl font-bold my-4'>Notifications</div>
      {
        notificationsdata.map((i) => {
          return (
            <div className='card bg-gray-800 p-4 flex justify-between items-center rounded-lg my-6 px-4' key={i._id.toString()}>
              <div>
              <div className="date my-2 mb-2 text-base">{i.createdAt.toLocaleString()}</div>
              <div className="text-xl">{i.msg}</div>
              </div>
              <div>
                <MdDelete className='text-2xl hover:text-red-500 transition-all duration-250 hover:scale-125' />
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Notification