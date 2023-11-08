const { NextResponse } = require("next/server");
import connect from "@/app/lib/mongodb";
import MemberModel from "@/app/models/Member.model";
import Notifications from "@/app/models/Notifications";
import Resetpassword from "@/app/models/Resetpassword";

export async function GET(req) {
    await connect()
    let requests = await Resetpassword.find()
    return NextResponse.json({ requestsdata: requests })
}

export async function POST(req) {
    const data = await req.json()
    await connect()
    let userdata = await MemberModel.find({
        $or: [
            { 'email': data.email },
            { 'username': data.email }
        ]
    })
    if (userdata.length === 0) {
        return NextResponse.json({ uid: false })
    }
    if (userdata[0]) {
        let res = await Resetpassword.create({
            email: userdata[0].email
        })
        if (res._id.toString()) {
            return NextResponse.json({ uid: true })
        }
    }
}
