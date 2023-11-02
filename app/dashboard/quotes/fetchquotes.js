'use server'
import connect from "@/app/lib/mongodb";
import Quotes from "@/app/models/quotes";

const getquote = async () => {
    await connect()
    let quotes = await Quotes.find().limit(10)
    return quotes
}

export default getquote