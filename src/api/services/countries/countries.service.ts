import { CountriesDao } from "@/api/daos";
import { CreateCountryDto } from "@/api/dtos";
import { CreateCountry } from "@/api/types";


export class CountriesService {

      constructor(private countriesDao: CountriesDao) {

      }

      async create(createCountry: CreateCountry) {

            const createCountryDto = new CreateCountryDto(createCountry).validate();

            const result = await this.countriesDao.create(createCountryDto);

            return result;

      }

      async findAll() {

            const result = await this.countriesDao.findAll();

            return result;

      }

}