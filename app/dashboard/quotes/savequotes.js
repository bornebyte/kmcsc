'use server'
import connect from "@/app/lib/mongodb";
import Quotes from "@/app/models/quotes";

const addQuotefunc = async (quote, tags) => {
    await connect()
    let res = await Quotes.create({ quote, tags })
    return res._id.toString()
}

export default addQuotefunc