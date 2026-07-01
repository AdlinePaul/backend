import { verifyToken } from "./middleware/auth.js";
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
// import {startStandaloneServer} from "@apollo/server/standalone";
import { typeDefs } from "./schema/typeDefs.js";
import { resolvers } from "./resolvers/resolvers.js";
import { connectDB } from "./db/connectDB.js";
await connectDB();
const app = express();
app.use(cors());
app.use(express.json());
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
await server.start();
// app.use("/graphql", expressMiddleware(server));
app.use("/graphql", expressMiddleware(server, { context: async ({ req }) => {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return { user: null };
        }
        const token = authHeader?.replace("Bearer", "");
        const user = verifyToken(token);
        return { user };
    },
}));
const port = 4000;
app.listen(port, () => {
    console.log(`Server ready at http://localhost:${port}/graphql`);
});
// const { url } = await startStandaloneServer(server, {
//     listen: {
//         port: 4000,
//     },
// });
// console.log(`Server ready at ${url}`);
//# sourceMappingURL=index.js.map