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

// Función para cargar el producto
async function getProduct(id: string): Promise<ProductResponse> {
  return fetchProduct(id, '1');
}

// Componente principal de la página
export default function ProductPage({ params }: ProductsPageProps) {
  const { id } = params;

  // El componente `LoadProduct` carga los datos de manera asíncrona en el servidor
  const LoadProduct = async () => {
    const product = await getProduct(id);
    return <Product product={product} />;
  };

  return (
    <Suspense fallback={<Loading />}>
      <LoadProduct /> {/* No utilizamos await aquí directamente */}
    </Suspense>
  );
}
