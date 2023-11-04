const { NextResponse } = require("next/server");
import connect from "@/app/lib/mongodb";
import Post from "@/app/models/AddPost";
import Notifications from "@/app/models/Notifications";

export async function GET(request) {
    const { searchParams } = new URL(request.url)
    let limitval = 10
    try {
        limitval = searchParams.get('limit')
    } catch (error) {
        limitval = 10
    }
    await connect()
    let data = await Post.find().sort({ _id: -1 }).limit(limitval)
    return NextResponse.json(data)
}

export async function POST(req) {
    await connect()
    const userdata = await req.json()
    let res = await Post.create({
        title: userdata.title,
        content: userdata.content,
        author: userdata.author,
    })
    await Notifications.create({
        msg: `New post added with id ${res._id.toString()}`
    })
    return NextResponse.json({ uid: res._id.toString() })
}
