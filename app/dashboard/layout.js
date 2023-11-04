import Aside from "./Aside";

export default function DashboardLayout({ children }) {
    return (
        <div className="bg-gray-900 min-h-screen">
            <div className=""><Aside /></div>
            <div className=''>
                {children}
            </div>
        </div>
    )
}