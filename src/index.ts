import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';
import dotenv from 'dotenv';
import { typeDefs } from './schemas';
import { resolvers } from './resolvers';
import { ProductsApi } from './datasources/products.api';
import { MyContext } from './context/MyContext';


dotenv.config();
const app_port = process.env.APP_PORT ? parseInt(process.env.APP_PORT) : 4000;

console.log("process.env.APP_PORT ",process.env.APP_PORT);

async  function startServer() {
    const server = new ApolloServer<MyContext>({typeDefs,resolvers});
    const {url} = await startStandaloneServer(server,{
        listen:{
           port: app_port
        },
        context: async ()=>{
            const {cache} = server;

            return {
                dataSources:{
                    productsApi: new ProductsApi({cache})
                }
            }
        }
    });
    console.log(`Server ready at ${url}`);
}

startServer();


console.log("process.env.APP_PORT ",app_port);