export declare const resolvers: {
    Query: {
        jobs: (_: unknown, args: {
            filter?: {
                location?: string;
                type?: string;
                status?: string;
            };
        }) => Promise<(import("mongoose").Document<unknown, {}, {
            title: string;
            type: string;
            description: string;
            company: string;
            salaryMin: number;
            salaryMax: number;
            location: string;
            status: string;
        }, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<{
            title: string;
            type: string;
            description: string;
            company: string;
            salaryMin: number;
            salaryMax: number;
            location: string;
            status: string;
        } & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        })[]>;
        job: (_: unknown, args: {
            id: String;
        }) => Promise<(import("mongoose").Document<unknown, {}, {
            title: string;
            type: string;
            description: string;
            company: string;
            salaryMin: number;
            salaryMax: number;
            location: string;
            status: string;
        }, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<{
            title: string;
            type: string;
            description: string;
            company: string;
            salaryMin: number;
            salaryMax: number;
            location: string;
            status: string;
        } & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }) | null>;
    };
    Mutation: {
        addJob: (_: unknown, args: {
            input: any;
        }) => Promise<import("mongoose").Document<unknown, {}, {
            title: string;
            type: string;
            description: string;
            company: string;
            salaryMin: number;
            salaryMax: number;
            location: string;
            status: string;
        }, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<{
            title: string;
            type: string;
            description: string;
            company: string;
            salaryMin: number;
            salaryMax: number;
            location: string;
            status: string;
        } & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }>;
        applyToJob: (_: unknown, args: {
            input: {
                name: string;
                email: string;
                coverLetter: string;
                jobId: string;
            };
        }) => Promise<{
            success: boolean;
            message: string;
        }>;
    };
};
//# sourceMappingURL=resolvers.d.ts.map