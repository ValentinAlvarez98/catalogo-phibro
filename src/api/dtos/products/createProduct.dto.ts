import { DtoValidations } from "@/api/utils";

export class CreateProductDto extends DtoValidations {

      name: string = "";
      type: string = "";
      description: string = "";
      logo: string = "";
      composition: string = "";
      categoryId: string = "";
      countries: {
            connect: { id: string }[];
      } = { connect: [] };
      presentation?: string = "";
      qr?: string = "";

      protected _allowedProperties: Array<keyof this> = ['name', 'type', 'description', 'logo', 'composition', 'categoryId', 'countries', 'presentation', 'qr'];

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

            this._validateRequiredFields(['name', 'type', 'description', 'logo', 'composition', 'categoryId', 'countries']);

            this._validateMinLength('name', 3);

            this._validateMinLength('description', 3);

            this._validateMinLength('logo', 3);

            this._validateMinLength('composition', 3);

            this._validateMinLength('countries', 1);

            return {
                  name: this.name,
                  type: this.type,
                  description: this.description,
                  logo: this.logo,
                  composition: this.composition,
                  categoryId: this.categoryId,
                  countries: this.countries,
                  presentation: this.presentation,
                  qr: this.qr,
            }

      }

}