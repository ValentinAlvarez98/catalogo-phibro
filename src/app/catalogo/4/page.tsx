import { fetchProducts } from "@/app/utils"


export default async function VacunasPage() {

      const products = await fetchProducts("4")

      console.log(products)

      return (
            <>
                  <h1
                        className="text-4xl text-center font-bold mt-8"
                  >Vacunas</h1>

                  {products.map((product) => (
                        <ul key={product.id} className="
                  flex flex-col space-y-2 justify-center items-start ml-80
                  
                  ">
                              <li><strong>ID:</strong> {product.id}</li>
                              <li><strong> CreatedAt: </strong> {product.createdAt}</li>
                              <li><strong>UpdatedAt: </strong> {product.updatedAt}</li>
                              <li ><strong>Name: </strong>  {product.name}</li>
                              <li><strong>Type: </strong> {product.type} </li>
                              <li><strong>Description: </strong> {product.description}</li>
                              <li> <strong>Logo: </strong>
                                    <img src={product.logo} alt="logo"
                                          className="w-20 h-20"
                                    />
                              </li>
                              <li><strong>Composition: </strong>{product.composition}</li>
                              <li><strong>Category: </strong>{product.categoryId}</li>
                              {product.presentation && <li><strong>Presentation:</strong> {product.presentation}</li>}
                              {product.qr && <li><strong>QR:</strong> {product.qr}</li>}
                              <li> <strong>Countries:</strong>
                                    {product.countries.map((country) => (

                                          <img key={country.flag} src={country.flag}
                                                className="w-10 h-10 mt-2 mb-2"
                                                alt="flag" />
                                    ))}
                              </li>
                        </ul>
                  ))}

            </>
      )

}