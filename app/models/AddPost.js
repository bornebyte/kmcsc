import mongoose from 'mongoose';

const addNewPostSchema = new mongoose.Schema({
    title: {
        type: String,
    },
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
    },
    countComment: {
        type: Number,
        default: 0,
    },
    countSaved: {
        type: Number,
        default: 0,
    },
}, { timestamps: true });

export default mongoose.models.Posts || mongoose.model("Posts", addNewPostSchema);