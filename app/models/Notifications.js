import mongoose from 'mongoose';

const notificationsSchema = new mongoose.Schema({
    msg: {
        type: String,
    },
    read: {
        type: Boolean,
        default: false
    },
    del: {
        type: Boolean,
        default: false
    },
}, { timestamps: true });

export default mongoose.models.Notifications || mongoose.model("Notifications", notificationsSchema);