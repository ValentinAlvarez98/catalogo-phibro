
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
      navigationId: number;
      countries: {
            flag: string;
      }[];


}

export type ProductResponse = {

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
      navigationId: number;
      countries: {
            flag: string;
      }[];
      prevProduct: string;
      nextProduct: string;


}