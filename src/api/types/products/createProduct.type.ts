

export type CreateProduct = {
      name: string;
      type: string;
      description: string;
      logo: string;
      composition: string;
      categoryId: string;
      countries: {
            connect: { id: string }[];
      };
      presentation?: string;
      qr?: string;
};