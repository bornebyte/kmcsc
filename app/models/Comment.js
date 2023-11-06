import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
    },
    author: {
        type: String,
        required: true,
    },
    countLike: {
        type: Number,
        default: 0,
    }
}, { timestamps: true });

export default mongoose.models.Comments || mongoose.model("Comments", commentSchema);