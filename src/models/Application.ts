import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    coverLetter:{
        type: String,
        required: true,
    },
    jobId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
        required: true,
    },
});

export const Application = mongoose.model(
    "Application",
    applicationSchema
);