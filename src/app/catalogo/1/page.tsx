// app/anticoccidianos/page.tsx

import { Suspense } from "react";
import { fetchProducts } from "@/app/utils";
import { ProductsResponse } from "@/app/types";
import { Anticoccidianos } from "@/app/components/Products/1/Anticoccidianos";
import Loading from "@/app/loading";  // Asegúrate de importar tu componente de loading

// Componente que manejará la carga de productos
const LoadProducts = async () => {
  // Cargando productos de manera asíncrona
  const products: ProductsResponse[] = await fetchProducts("1");
  return <Anticoccidianos products={products} />;
}

export default function AnticoccidianosYAntibioticosPage() {
  return (
<>
      <div id='marcoYHojas' className="absolute inset-0 z-0"></div>

    <Suspense fallback={<Loading />}>
      <LoadProducts />
    </Suspense>
    </>
  );
}
