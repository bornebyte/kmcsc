import React from 'react'
import CreatePost from './Post'

const Dashboard = () => {
    return (
        <div className="bg-gray-900">
            <div className='container max-w-[80vw] mx-auto min-h-screen bg-gray-900'>
                <h1 className='text-center text-5xl'>Dashboard</h1>
                <CreatePost />
            </div>
        </div>
    )
}

export default Dashboard