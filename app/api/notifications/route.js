const { NextResponse } = require("next/server");
import connect from "@/app/lib/mongodb";
import Notifications from "@/app/models/Notifications";

export async function GET(request) {
    let limitval = 10
    try {
        const { searchParams } = new URL(request.url)
        limitval = searchParams.get('limit')
    } catch (error) {
        limitval = 10
    }
    await connect()
    let data = await Notifications.find().sort({ _id: -1 }).limit(20)
    return NextResponse.json(data)
}

export async function POST(req) {
    const newquote = await req.json()
    await connect()
    let res = await Notifications.create({ msg: "api/notifications" })
    return NextResponse.json({ uid: res._id.toString() })
}
