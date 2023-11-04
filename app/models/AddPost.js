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
}, { timestamps: true });

export default mongoose.models.Posts || mongoose.model("Posts", addNewPostSchema);