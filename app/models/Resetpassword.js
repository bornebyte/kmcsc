import mongoose from 'mongoose';

const resetPasswordSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    fulfilled: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true });

export default mongoose.models.ResetPasswordRequest || mongoose.model("ResetPasswordRequest", resetPasswordSchema);