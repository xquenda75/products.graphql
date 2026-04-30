import { ProductsApi } from "../datasources/products.api"

export interface MyContext {
    dataSources:{
        productsApi: ProductsApi
    }
}