const { NextResponse } = require("next/server");
import { kv } from "@vercel/kv";

export async function GET(request) {
    // const keys = await kv.Keys();
    // console.log(keys)
    // const a = {};
    // for (const key of keys) {
    //     const value = await kv.get(key);
    //     a[key] = value;
    // }
    // console.log(a)

    // return data;
    const data = await kv.get(2);
    return NextResponse.json(data, { status: 201 })
}

export async function POST(request) {
    const formData = await request.formData();
    const fieldNames = formData.keys();

    // Get the values of the form fields.
    const fieldValues = [];
    for (const fieldName of fieldNames) {
        const fieldValue = formData.get(fieldName);
        fieldValues.push(fieldValue);
    }

    const res = await kv.set(1, {
        id: Date.now().toString(36),
        title: fieldValues[0],
        desc: fieldValues[1],
        author: fieldValues[2],
        date: Date().toString()
    })
    return NextResponse.json({ "Msg": res }, { status: 201 })
}