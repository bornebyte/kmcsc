import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: Number,
    },
    password: {
        type: String,
        default: "kmcsc"
    },
    clubname: {
        type: String,
    },
    role: {
        type: String,
    },
    del: {
        type: Boolean,
        default: false
    },
    retired: {
        type: Boolean,
        default: false
    },
}, { timestamps: true });

export default mongoose.models.User || mongoose.model("User", userSchema);