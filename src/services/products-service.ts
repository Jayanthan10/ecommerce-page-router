import { ServiceBase } from "./service-base"
import { Product } from "@/types/product"

export class ProductsService extends ServiceBase {

  static async getProducts(): Promise<Product[]> {
    const response = await fetch("https://fakestoreapi.com/products")
    return this.handleResponse<Product[]>(response)
  }

  static async getProductById(id: number): Promise<Product> {
    if (!id) {
      throw new Error("Invalid product ID")
    }

    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    return this.handleResponse<Product>(response)
  }
}