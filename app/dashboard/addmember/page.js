'use client'
import toast, { Toaster } from 'react-hot-toast';

const AddMember = () => {
    const handleForm = async (formData) => {
        let name = formData.get("full-name")
        let email = formData.get("email")
        let phone = formData.get("phone")
        let clubname = formData.get("club-name")
        let role = formData.get("role")
        let res = await fetch(`/api/members`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                clubname,
                role
            }),
        })
        let data = await res.json()
        if (data.uid) {
            toast.success("Member Added Successfully")
        }
    }
    return (
        <form className="text-gray-400 bg-gray-900 body-font" action={handleForm}>
            <Toaster />
            <div className="py-6 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col w-[90vw] lg:w-[40vw] mx-auto">
                <h2 className="text-white text-lg font-medium title-font mb-5 text-center">Add New Members</h2>
                <div className="relative mb-4">
                    <label htmlFor="full-name" className="leading-7 text-sm text-gray-400">Full Name</label>
                    <input type="text" id="full-name" name="full-name" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-4">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
                    <input type="email" id="email" name="email" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-4">
                    <label htmlFor="phone" className="leading-7 text-sm text-gray-400">Phone Number</label>
                    <input type="number" id="phone" name="phone" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-4">
                    <label htmlFor="club-name" className="leading-7 text-sm text-gray-400">Club Name</label>
                    <select name="club-name" id="club-name" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                        <option value="computer" className="bg-gray-900">Computer</option>
                        <option value="music" className="bg-gray-900">Music</option>
                        <option value="dance" className="bg-gray-900">Dance</option>
                        <option value="science" className="bg-gray-900">Science</option>
                        <option value="Maths" className="bg-gray-900">Maths </option>
                        <option value="Editorial Team" className="bg-gray-900">Editorial Team </option>
                        <option value="Robits" className="bg-gray-900">Robits</option>
                        <option value="Seds" className="bg-gray-900">Seds</option>
                        <option value="Research and Presentation" className="bg-gray-900">Research and Presentation</option>
                        <option value="Literature" className="bg-gray-900">Literature </option>
                        <option value="Art and Cultural" className="bg-gray-900">Art and Cultural </option>
                        <option value="Event Management" className="bg-gray-900">Event Management </option>
                        <option value="Speech and Debate" className="bg-gray-900">Speech and Debate</option>
                        <option value="Legal" className="bg-gray-900">Legal</option>
                        <option value="Media" className="bg-gray-900">Media </option>
                        <option value="Social Service" className="bg-gray-900">Social Service </option>
                    </select>
                </div>
                <div className="relative mb-4">
                    <label htmlFor="role" className="leading-7 text-sm text-gray-400 appearance-none">Role</label>
                    <select name="role" id="role" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                        <option value="President" className="bg-gray-900">President</option>
                        <option value="Secretary" className="bg-gray-900">Secretary</option>
                        <option value="Secretary" className="bg-gray-900">Executive</option>
                        <option value="Treasurer" className="bg-gray-900">Treasurer</option>
                        <option value="Member" className="bg-gray-900">Member</option>
                    </select>
                </div>
                <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Post</button>
            </div>
        </form>
    )
}

export default AddMember