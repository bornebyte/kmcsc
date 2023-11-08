'use client'
import Aside from "./Aside";
const { redirect } = require("next/navigation");

export default function DashboardLayout({ children }) {
    try {
        let userdata = localStorage.getItem("userdata")
        if (userdata === null) {
            redirect("/login")
        }
    } catch (error) {
        
    }
    return (
        <div className="bg-gray-900 min-h-screen">
            <Aside />
            <div className="py-4">
                {children}
            </div>
        </div>
    )
}