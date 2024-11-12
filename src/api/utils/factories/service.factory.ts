import { CountriesDao, GameFormDao, ProductsDao } from "@/api/daos";
import { CountriesService, GameFormService, ProductsService } from "@/api/services";



export class ServiceFactory {

      static getGameFormService(): GameFormService {

            return new GameFormService(new GameFormDao());

      }

      static getCountriesService(): CountriesService {

            return new CountriesService(new CountriesDao());

      }

      static getProductsService(): ProductsService {

            return new ProductsService(new ProductsDao());

      }

}