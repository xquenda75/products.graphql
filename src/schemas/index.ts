


export const typeDefs =`#graphql

    type Product {
        id: ID
        name: String
        price: Float
        stock: Int
        createdAt: String
        updatedAt: String
    }

    type ResponseApi{
        message:String
        code:Int
    }

    input ProductInput {
        name:String!
        price:Float!
        stock:Int!
    }

    input ProductUpdateInput {
        id:ID!
        name:String
        prices:Float
        stock:Int
    }

    type Query {
        GetProducts: [Product]
        GetProductById(id:ID!):Product
    }

    type Mutation {
        createProduct(product:ProductInput):Product
        updateProduct(product:ProductUpdateInput):Product
        deleteProduct(id:ID!):ResponseApi
    }

`;
