"use client"

import { Card } from "@/components/card"
import { SearchProduct } from "@/components/searchProduct"
import { products } from "@/utils/data"
import { useState } from "react"
import { ProductsProps } from "../interface"

export default function Products() {
  const [searchResults, setSearchResults] = useState<ProductsProps[]>([])

  return (
    <main className="max-w-7xl m-auto">
      <SearchProduct setSearchResults={setSearchResults} />
      <div className="grid md:grid-cols-2 xl:grid-cols-3">
        {searchResults.length === 0
          ? // Se não houver resultados da pesquisa, mostrar todos os produtos
            products.map((product) => (
              <Card
                key={product.id}
                name={product.name}
                actual_price={product.actual_price}
                discount_percentage={product.discount_percentage}
                on_sale={product.on_sale}
                regular_price={product.regular_price}
                id={product.id}
                image={product.image}
                data-testid="product-card"
              />
            ))
          : // Se houver resultados da pesquisa, mostrar os resultados
            searchResults.map((product) => (
              <Card
                key={product.id}
                name={product.name}
                actual_price={product.actual_price}
                discount_percentage={product.discount_percentage}
                on_sale={product.on_sale}
                regular_price={product.regular_price}
                id={product.id}
                image={product.image}
              />
            ))}
      </div>
    </main>
  )
}
