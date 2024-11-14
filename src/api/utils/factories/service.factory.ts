import { CountriesDao, ProductsDao } from "@/api/daos";
import { CountriesService, ProductsService } from "@/api/services";



export class ServiceFactory {

      static getCountriesService(): CountriesService {

            return new CountriesService(new CountriesDao());

      }

      static getProductsService(): ProductsService {

            return new ProductsService(new ProductsDao());

      }

}