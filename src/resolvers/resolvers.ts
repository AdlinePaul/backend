import { Job } from "../models/Job.js";
import { Application } from "../models/Application.js";
export const resolvers = {
  Query: {
    // jobs: async () => {
    //     return await Job.find();
    // },
    jobs: async (
      _: unknown,
      args: { filter?: { location?: string; type?: string; status?: string } },
    ) => {
      const filter = args.filter || {};
      return await Job.find(filter);
    },

    job: async (_: unknown, args: { id: String }) => {
      return await Job.findById(args.id);
    },
  },
  Mutation: {
    addJob: async (_: unknown, args: {input: any}) => {
        return await Job.create(args.input);
    },
    applyToJob: async(_:unknown,args: {input: {name: string; email: string; coverLetter: string; jobId: string;};
    }) => { await Application.create({
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
}
