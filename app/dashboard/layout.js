import Aside from "./Aside";

export default function DashboardLayout({ children }) {
    return (
        <div className="bg-gray-900 min-h-screen">
            <Aside />
            <div>
                {children}
            </div>
        </div>
    )
}