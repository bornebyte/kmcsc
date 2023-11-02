import mongoose from 'mongoose';

const quotesSchema = new mongoose.Schema({
    quote: {
        type: String,
        required: true
    },
    tags: {
        type: String
    }
}, { timestamps: true });

export default mongoose.models.Quotes || mongoose.model("Quotes", quotesSchema);