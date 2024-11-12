import { ProductsDao } from "@/api/daos";
import { CreateProduct } from "@/api/types";


export class ProductsService {

      constructor(private productsDao: ProductsDao) { }


      async create(createProduct: CreateProduct) {

            const result = await this.productsDao.create(createProduct);

            return result;

      }

      async findAllByCategory(categoryId: string) {

            const result = await this.productsDao.findAllByCategory(categoryId);

            return result;

      }

}