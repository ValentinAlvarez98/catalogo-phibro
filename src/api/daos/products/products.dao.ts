import { CreateProduct } from "@/api/types";
import { PrismaClient } from "@prisma/client";

export class ProductsDao extends PrismaClient {


      constructor() {
            super()
      }

      async create(createProduct: CreateProduct) {

            const result = await this.product.create({
                  data: createProduct
            });

            return result;

      }

      async findAllByCategory(categoryId: string) {

            const result = await this.product.findMany({
                  where: {
                        categoryId: categoryId
                  },
                  include: {
                        countries: {
                              select: {
                                    flag: true
                              }
                        }
                  }
            });

            return result;

      }

}