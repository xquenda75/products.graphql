import { productsMutations, productsQuerys } from "./products.resolvers"

export const resolvers = {
    Query:{
            ...productsQuerys
    },
    Mutation:{
            ...productsMutations
    }
}

// const products = [
//     {
//         id: '1',
//         name: 'Teclado inalambrico',
//         price: 100,
//         stock: 10,
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString()
//     },
//     {
//         id: '2',
//         name: 'Mouse inalambrico',
//         price: 200,
//         stock: 20,
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString()
//     },
//     {
//         id: '3',
//         name: 'Monitor 24 pulgadas',
//         price: 300,
//         stock: 5,
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString()
//     }
// ]