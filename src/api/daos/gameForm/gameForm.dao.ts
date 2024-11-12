import { CreateGameForm } from "@/api/types";
import { PrismaClient } from "@prisma/client";


export class GameFormDao extends PrismaClient {

      constructor() {
            super()
      }


      async create(createGameForm: CreateGameForm) {

            const result = await this.gameForm.create({
                  data: createGameForm
            });

            return result;

      }

      async findAll() {

            const result = await this.gameForm.findMany();

            return result;

      }

}