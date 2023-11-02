'use server'
import connect from "@/app/lib/mongodb";
import AddPost from "@/app/models/AddPost";

const getPosts = async () => {
    await connect()
    let data = await AddPost.find()
    return data
}

export default getPosts