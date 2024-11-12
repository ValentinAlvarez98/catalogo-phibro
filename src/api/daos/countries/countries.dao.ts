import { CreateCountry } from "@/api/types";
import { PrismaClient } from "@prisma/client";

export class CountriesDao extends PrismaClient {

      constructor() {
            super()
      }

      async create(createCountry: CreateCountry) {

            const result = await this.country.create({
                  data: createCountry
            });

            return result;

      }

      async findAll() {

            const result = await this.country.findMany();

            return result;

      }

}