import { envs } from "@/api/config/envs";
import { ProductsResponse, ProductResponse } from "../types";

async function fetchData<T>(url: string): Promise<T> {
      const res = await fetch(url, {
            method: 'GET',
            headers: {
                  'Content-Type': 'application/json',
            },
            next: { revalidate: false }
      });

      if (!res.ok) {
            console.error(`Failed to fetch data from ${url}:`, res.statusText);
      }

      return res.json();
}

export async function fetchProducts(categoryId: string): Promise<ProductsResponse[]> {

      const data = await fetchData<ProductsResponse[]>(`${envs.API_URL}/products?categoryId=${categoryId}`);
      return data;

}

export async function fetchProduct(productId: string, categoryId: string): Promise<ProductResponse> {

      const data = await fetchData<ProductResponse>(`${envs.API_URL}/products/ById?productId=${productId}&categoryId=${categoryId}`);
      return data;

}