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

      async findAllIdsByCategory(categoryId: string) {

            const result = await this.product.findMany({
                  where: {
                        categoryId: categoryId
                  },
                  select: {
                        id: true,
                        name: true,
                  },
                  orderBy: {
                        name: 'asc'
                  }
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
                  },
                  orderBy: {
                        name: 'asc'
                  }
            });

            return result;

      }

      async findById(productId: string) {

            const result = await this.product.findUnique({
                  where: {
                        id: productId
                  },
                  include: {
                        countries: {
                              select: {
                                    flag: true
                              }
                        }
                  },
            })

            return result

      }

}