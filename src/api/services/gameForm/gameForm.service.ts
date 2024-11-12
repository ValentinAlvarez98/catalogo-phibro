import { GameFormDao } from "@/api/daos";
import { CreateGameFormDto } from "@/api/dtos";
import { CreateGameForm } from "@/api/types";


export class GameFormService {

      constructor(private gameFormDao: GameFormDao) { }

      async create(createGameForm: CreateGameForm) {

            const createGameFormDto = new CreateGameFormDto(createGameForm).validate();

            const result = await this.gameFormDao.create(createGameFormDto);

            return result;

      }

      async findAll() {

            const result = await this.gameFormDao.findAll();

            return result;

      }

}