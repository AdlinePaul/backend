import mongoose from "mongoose";
const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    salaryMin: {
        type: Number,
        required: true,
    },
    salaryMax: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
});
export const Job = mongoose.model("Job", jobSchema);
//# sourceMappingURL=Job.js.map