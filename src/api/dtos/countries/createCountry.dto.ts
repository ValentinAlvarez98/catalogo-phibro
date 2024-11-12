import { DtoValidations } from "@/api/utils";

export class CreateCountryDto extends DtoValidations {

      flag: string = "";
      name: string = "";

      protected _allowedProperties: Array<keyof this> = ['flag', 'name'];

      constructor(body: any) {

            super()

            for (const key in body) {

                  if (this._allowedProperties.includes(key as keyof this)) {

                        this[key as keyof this] = body[key];

                  }

            }

      }

      validate() {

            this._validateNoAdditionalProperties();

            this._validateRequiredFields(['flag', 'name']);

            this._validateMinLength('flag', 3);

            return {
                  flag: this.flag,
                  name: this.name
            }

      }

}