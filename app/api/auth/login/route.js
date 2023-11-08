const { NextResponse } = require("next/server");
import connect from "@/app/lib/mongodb";
import MemberModel from "@/app/models/User";
import Notifications from "@/app/models/Notifications";
const CryptoJS = require("crypto-js");

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
    if ((CryptoJS.AES.decrypt(userdata[0].password, process.env.CRYPTO_SECRET_KEY).toString(CryptoJS.enc.Utf8)) === data.password) {
        await Notifications.create({
            msg: `User login with email : ${userdata[0].email}`
        })
        // return NextResponse.json({ uid: true,email:userdata[0].email,password:userdata[0].password })
        return NextResponse.json({ uid: true, userdata: userdata[0] })
    } else {
        return NextResponse.json({ uid: false })
    }
}
