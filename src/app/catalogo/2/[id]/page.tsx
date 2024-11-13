// app/product/page.tsx

import { Suspense } from "react";
import { Product } from "@/app/components/Product";
import { fetchProduct } from "@/app/utils";
import { ProductResponse } from "@/app/types";
import Loading from "@/app/loading";  // Asegúrate de tener el componente de carga

interface ProductsPageProps {
  params: {
    id: string;
  };
}

// Componente que manejará la carga asíncrona del producto
const LoadProduct = async (id: string) => {
  const product: ProductResponse = await fetchProduct(id, '2');
  return <Product product={product} />;
}

export default function ProductPage({ params }: ProductsPageProps) {

      const id =  params.id;

  return (
    <Suspense fallback={<Loading />}>
      {LoadProduct(params.id)}
    </Suspense>
  );
}
