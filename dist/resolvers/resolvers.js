import { Job } from "../models/Job.js";
import { Application } from "../models/Application.js";
export const resolvers = {
    Query: {
        // jobs: async () => {
        //     return await Job.find();
        // },
        jobs: async (_, args) => {
            const filter = args.filter || {};
            return await Job.find(filter);
        },
        job: async (_, args) => {
            return await Job.findById(args.id);
        },
    },
    Mutation: {
        addJob: async (_, args) => {
            return await Job.create(args.input);
        },
        applyToJob: async (_, args) => {
            await Application.create({
                name: args.input.name,
                email: args.input.email,
                coverLetter: args.input.coverLetter,
                jobId: args.input.jobId,
            });
            return {
                success: true,
                message: "Application submitted successfully",
            };
        },
    }
};
//# sourceMappingURL=resolvers.js.map