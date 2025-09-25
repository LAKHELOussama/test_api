import { IProduct } from "./product.model";
import { ProductRepository } from "./product.repo";

export class ProductService {
    private ProductRepository: ProductRepository
    constructor() {
        this.ProductRepository = new ProductRepository()
    }
    async createProduct(ProductData: Partial<IProduct>): Promise<IProduct> {
        return await this.ProductRepository.createProduct(ProductData)
    }

    async updateProduct(id: string, ProductData: Partial<IProduct>): Promise<IProduct | null> {
        return await this.ProductRepository.updateProduct(id, ProductData)
    }

    async deleteProduct(id: string): Promise<IProduct | null> {
        return this.ProductRepository.deleteProduct(id)
    }

    async finById(id: string): Promise<IProduct | null> {
        return this.ProductRepository.findProductById(id)
    }
    async findAll(): Promise<IProduct[] | null> {
        return this.ProductRepository.findAll()
    }
    async finByName(name: string): Promise<IProduct | null> {
        return this.ProductRepository.findProductByName(name)
    } 
    async paginate(page: number, limit: number , query? :any) {
        return await this.ProductRepository.paginate(page, limit, query)
    }

}