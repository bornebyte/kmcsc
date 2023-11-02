'use server'
import connect from "@/app/lib/mongodb"
import AddPostModel from "@/app/models/AddPost"

const saveData = async (title, content, author) => {
    await connect()
    let res = await AddPostModel.create({
        uid: Date.now().toString(36),
        title: title,
        content: content,
        author: author,
    })
    return res.id.toString()
}

export default saveData
