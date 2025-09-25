import { IProduct, ProductModel } from "./product.model";

export class ProductRepository {
    async createProduct(productData: Partial<IProduct>): Promise<IProduct> {
      
        const Product = new ProductModel(productData);
        return await Product.save();
    }
    async updateProduct(id: string, ProductData: Partial<IProduct>): Promise<IProduct | null> {
        return await ProductModel.findByIdAndUpdate(id, ProductData);
    }
    async findAll(): Promise<IProduct [] | null> {
        return await ProductModel.find();
    }
    async deleteProduct(id : string) : Promise<IProduct | null>{
        return await ProductModel.findByIdAndDelete(id)
    }
    async findProductById(id: string): Promise<IProduct| null> {
      return await ProductModel.findById(id);
    }
       async findProductByName(name: string): Promise<IProduct | null> {
            return await ProductModel.findOne({ name });
            
          }
    async paginate( page: number | string, limit: number | string, query: any = {}, select = "-password" ) {
    const { type , category, inStock } = query;
    let _query = {}
        if (type) {
            _query = {
              $or: [
                { type: type },
              ],
            }
          }
            if (category) {
            _query = {
              $or: [
                { category: category },
              ],
            }
          }
          if (type && category ) {
            _query = {
              $and: [
                { type: type },
                { category: category },

              ],
            }
          }
          if (inStock) {
            _query = {
              $or: [
                { inStock: true },
              ],
            }
          }
        const total = await ProductModel.countDocuments(_query);
        const limitNumber = limit === Infinity || limit === 'Infinity' ? total : Number(limit);
        const pageNumber = Math.max(Number(page), 1); // Ensure page is at least 1
    
      
        const docs = await ProductModel
            .find(_query)
            .select(select)
            .limit(limitNumber)
            .skip((pageNumber - 1) * limitNumber)
            .lean();
    
        
        console.log("this is " , docs)
        return {
            'docs': docs,
           'page': pageNumber,
           'limit': limitNumber,
           'total' : total ,
           'pages': Math.ceil(total / limitNumber),
         };
    }
}