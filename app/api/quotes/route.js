const { NextResponse } = require("next/server");
import connect from "@/app/lib/mongodb";
import Quotes from "@/app/models/quotes";
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
    let data = await Quotes.find().sort({ _id: -1 }).limit(limitval)
    return NextResponse.json(data)
}

export async function POST(req) {
    const newquote = await req.json()
    await connect()
    let res = await Quotes.create({ quote: newquote.quote })
    await Notifications.create({
        msg: `New quote added with id ${res._id.toString()}`
    })
    return NextResponse.json({ uid: res._id.toString() })
}
