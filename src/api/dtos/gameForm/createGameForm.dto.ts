import { DtoValidations } from "@/api/utils";


export class CreateGameFormDto extends DtoValidations {

      name: string = "";
      email: string = "";
      country: string = "";

      protected _allowedProperties: Array<keyof this> = ['name', 'email', 'country'];

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

            this._validateRequiredFields(['name', 'email', 'country']);

            this._validateEmail('email');

            this._validateMinLength('name', 3);

            this._validateMinLength('country', 3);

            this._validateNotBadWords('name');


            return {
                  name: this.name,
                  email: this.email,
                  country: this.country,
            }

      }

}