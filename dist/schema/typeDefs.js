export const typeDefs = `#graphql

type Job{
    id: ID!
    title: String!
    description: String!
    company: String!
    salaryMin: Int!
    salaryMax: Int!
    location: String!
    type: String!
    status: String!
    }

input JobFilter{
    location: String
    type: String
    status: String
}

input ApplyInput{
    name:String!
    email: String!
    coverLetter: String!
    jobId: ID!
}

input AddJobInput{
    title: String!
    description: String!
    company: String!
    salaryMin: Int!
    salaryMax: Int!
    location: String!
    type: String!
    status: String!
}

type ApplicationResponse{
    success: Boolean!
    message: String!
}
    
type Query{
    jobs(filter: JobFilter): [Job]
    job(id: ID!): Job
}

type Mutation{
    addJob(input: AddJobInput!): Job
    applyToJob(input: ApplyInput!): ApplicationResponse}
`;
//# sourceMappingURL=typeDefs.js.map