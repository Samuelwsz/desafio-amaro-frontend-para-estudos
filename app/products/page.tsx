import { products } from "@/utils/data"
import { ShoppingCart } from "lucide-react"

import Link from "next/link"

export default function Products() {
  return (
    <main className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 xl:grid-cols-3 ">
        {products.map((product) => (
          <div key={product.id} className="m-8">
            <div className="border-2 border-slate-600 p-3 bg-slate-700">
              <div className="flex justify-between">
                <h1 className="mb-1 text-slate-100">{product.name}</h1>
                <ShoppingCart className="w-5 h-5" />
              </div>
              <div className="flex justify-between">
                <p>
                  {product.discount_percentage
                    ? product.actual_price
                    : product.regular_price}
                </p>
                <p>
                  {product.discount_percentage
                    ? `Desconto: ${product.discount_percentage}`
                    : ""}
                </p>
              </div>
              <div className="flex justify-between items-center mt-5">
                <div>
                  {product.on_sale ? (
                    <p className="text-slate-200">{"Em estoque"}</p>
                  ) : (
                    <p className="text-slate-400">{"Indisponível"}</p>
                  )}
                </div>
                <Link
                  className="bg-teal-500 p-1 px-2 text-slate-800 font-medium"
                  href={`/products/${product.id}`}
                >
                  Detalhes
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
