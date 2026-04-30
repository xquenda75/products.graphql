export const productsQuerys = {
    GetProducts:  async(_parent:any,_args:any,{dataSources}:any,_info:any):Promise<any> => {

        console.log("Initial products in resolvers");
        const {products} =  await dataSources.productsApi.getAllProducts();
        console.log("Final products in resolvers");
        console.log("products in resolvers",products);

        return products
    },
    GetProductById: async(_parent:any,{id}:any,{dataSources}:any,_info:any)=>{
        console.log("Initial GetProductById in resolvers");
        const product = await dataSources.productsApi.getProductById(id)
        console.log("product in GetProductById in resolvers",product);
        console.log("Final GetProductById in resolvers");
        return product;
    }

};

export const productsMutations={
    createProduct: async(_parent:any,{product}:any,{dataSources}:any,_info:any)=>{
        console.log("Initial createProduct in resolvers");
        console.log("product in createProduct in resolvers",product);
        const resp=await dataSources.productsApi.createProduct(product);
        return resp;
    },
    updateProduct: async(_parent:any,args:any,{dataSources}:any,_info:any)=>{
        const {product}=args;
        console.log("args:",args);
        console.log("Initial updateProduct in resolvers");
        console.log("product in updateProduct in resolvers",product);
        await dataSources.productsApi.updateProduct(product);
        return product; 
    },
    deleteProduct: async(_parent:any,{id}:any,{dataSources}:any,_info:any)=>{
        console.log("Initial deleteProduct in resolvers");
        console.log("id in deleteProduct in resolvers",id);
        await dataSources.productsApi.deleteProduct(id);
        const MessageApi={
            "message":"Product deleted","code":200
        };  
        return MessageApi;
    }
};