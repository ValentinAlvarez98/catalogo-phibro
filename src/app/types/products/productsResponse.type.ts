

export type ProductsResponse = {

      id: string;
      createdAt: string;
      updatedAt: string;
      name: string;
      type: string;
      description: string;
      logo: string;
      composition: string;
      categoryId: string;
      presentation?: string;
      qr?: string;
      countries: {
            flag: string;
      }[];


}