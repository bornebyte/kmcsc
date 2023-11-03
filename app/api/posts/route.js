const { NextResponse } = require("next/server");
import connect from "@/app/lib/mongodb";
import Post from "@/app/models/AddPost";

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

// export async function POST(req) {
//     const user = await req.json()
//     console.log(user)
//     return NextResponse.json("ok")
// }
