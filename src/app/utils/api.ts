// utils/api.ts
import { envs } from "@/api/config/envs";
import { ProductsResponse, ProductResponse } from "../types";

export type FormResponse = {

      id: string,
      name: string,
      email: string,
      country: string,
      createdAt: string
      updatedAt: string

}

async function fetchData<T>(url: string): Promise<T> {
      const res = await fetch(url, {
            method: 'GET',
            headers: {
                  'Content-Type': 'application/json',
            },
            cache: 'no-store',
      });

      if (!res.ok) {
            console.error(`Failed to fetch data from ${url}:`, res.statusText);
            throw new Error(`Failed to fetch data from ${url}`);
      }

      return res.json();
}
async function fetchCreateData<T>(url: string, body: object): Promise<T> {
      const res = await fetch(url, {
            method: 'POST',
            headers: {
                  'Content-Type': 'application/json',
            },
            cache: 'no-store',
            body: JSON.stringify(body),
      });

      if (!res.ok) {
            console.error(`Failed to fetch data from ${url}:`, res.statusText);
            throw new Error(`Failed to fetch data from ${url}`);
      }

      return res.json();
}



export async function fetchCreateForm(body: object): Promise<FormResponse> {
      const data = await fetchCreateData<FormResponse>(`${envs.API_URL}/gameForm`, body);
      return data;
}

export async function fetchProducts(categoryId: string): Promise<ProductsResponse[]> {

      const data = await fetchData<ProductsResponse[]>(`${envs.API_URL}/products?categoryId=${categoryId}`);
      return data;

}

export async function fetchProduct(productId: string ,categoryId: string): Promise<ProductResponse> {

      const data = await fetchData<ProductResponse>(`${envs.API_URL}/products/ById?productId=${productId}&categoryId=${categoryId}`);
      return data;

}