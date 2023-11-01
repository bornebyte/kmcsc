import React from 'react'
import {AiOutlineClose} from "react-icons/ai"

const Modal = ({showmodal}) => {
  if(!showmodal){
    return null
  }
  return (
    <div className='min-h-screen bg-gray-900 min-w-full flex justify-center items-center relative'>
        <div className="box w-[600px] h-[350px] bg-gray-600 rounded-xl p-6 fixed -top-100">
            <nav className='flex text-3xl justify-between text-white font-bold'>
                <div className="title">Title</div>
                <div className="close"><AiOutlineClose /></div>
            </nav>
            <div className="line w-full h-1 bg-blue-500 my-4"></div>
            <div className="content text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aspernatur deserunt doloremque similique, id dignissimos quae obcaecati delectus quas sed non nihil excepturi sit omnis voluptatibus? Quis optio ad rem!
            </div>
        </div>
    </div>
  )
}

export default Modal