import Aside from "./Aside";

export default function DashboardLayout({ children }) {
    return (
        <div className="bg-gray-900 min-h-screen flex">
            <div className="sidebar"><Aside /></div>
            <div className='container max-w-[60vw] mx-auto bg-gray-900'>
                {children}
            </div>
        </div>
    )
}