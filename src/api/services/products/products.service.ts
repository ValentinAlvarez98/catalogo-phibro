import { ProductsDao } from "@/api/daos";
import { CreateProduct } from "@/api/types";


export class ProductsService {

      constructor(private productsDao: ProductsDao) { }

      private async _findPrevAndNextIds(categoryId: string, productId:string) {

            const products = await this.productsDao.findAllIdsByCategory(categoryId);

      const currentIndex = products.findIndex(product => product.id === productId);

      if (currentIndex === -1) {
            return { prevProduct: null, nextProduct: null };
      }

      // Determina los productos anterior y siguiente
      const prevProduct = currentIndex > 0 ? products[currentIndex - 1] : null;
      const nextProduct = currentIndex < products.length - 1 ? products[currentIndex + 1] : null;

      return {
            prevProduct: prevProduct ? prevProduct.id : null,
            nextProduct: nextProduct ? nextProduct.id : null,
      };

      }


      async create(createProduct: CreateProduct) {

            const result = await this.productsDao.create(createProduct);

            return result;

      }

      async findAllByCategory(categoryId: string) {

            const result = await this.productsDao.findAllByCategory(categoryId);

            return result;

      }

      async findById(productId: string, categoryId: string) {

            const result = await this.productsDao.findById(productId);

            if (!result) {
                  
                  throw new Error('Invalid product')

            }

            const prevAndNextProductsIds = await this._findPrevAndNextIds(categoryId, productId)


            return {
                  ...result,
                  prevProduct: prevAndNextProductsIds.prevProduct,
                  nextProduct: prevAndNextProductsIds.nextProduct
            }

      }

}