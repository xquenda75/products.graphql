import { RESTDataSource } from "@apollo/datasource-rest";

export class ProductsApi extends RESTDataSource {
override baseURL = "http://localhost:3000";
  
  async getAllProducts(){
    console.log("Initial getAllProducts Api");
    const products= await this.get("/products");
    console.log("products in getAllProducts ", products);
    console.log("Final getAllProducts Api");
    return products;
  }

  async getProductById(id: number) {
    console.log("Initial getProductById Api");
    const product = await this.get(`/products/${id}`);
    console.log("product in getProductById ", product);
    console.log("Final getProductById Api");
    return product
  }

  async createProduct(product: any){
    console.log("Initial createProduct Api");
    console.log("product in createProduct ", product);
    const body ={
        name:product.name,
        price:product.price,
        stock:product.stock
    }
    await this.post("/products",{body});
    return product;
  }

  async updateProduct(product:any){
    console.log("Initial updateProduct Api");
    console.log("product in updateProduct ", product);
    const body ={
        name:product.name,
        price:product.price,
        stock:product.stock
    };
    await this.patch(`/products/${product.id}`,{body});
  }

  async deleteProduct(id:number){
    console.log("Initial deleteProduct Api");
    console.log("id in deleteProduct ", id);
    await this.delete(`/products/${id}`);
  }

  
}