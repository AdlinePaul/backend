import mongoose from "mongoose";
export declare const Job: mongoose.Model<{
    title: string;
    type: string;
    description: string;
    company: string;
    salaryMin: number;
    salaryMax: number;
    location: string;
    status: string;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
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
}, mongoose.DefaultSchemaOptions> & Omit<{
    title: string;
    type: string;
    description: string;
    company: string;
    salaryMin: number;
    salaryMax: number;
    location: string;
    status: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    title: string;
    type: string;
    description: string;
    company: string;
    salaryMin: number;
    salaryMax: number;
    location: string;
    status: string;
}, mongoose.Document<unknown, {}, {
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
}, mongoose.DefaultSchemaOptions> & Omit<{
    title: string;
    type: string;
    description: string;
    company: string;
    salaryMin: number;
    salaryMax: number;
    location: string;
    status: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    title: string;
    type: string;
    description: string;
    company: string;
    salaryMin: number;
    salaryMax: number;
    location: string;
    status: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    title: string;
    type: string;
    description: string;
    company: string;
    salaryMin: number;
    salaryMax: number;
    location: string;
    status: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=Job.d.ts.map