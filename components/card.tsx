import { ShoppingCart } from "lucide-react"
import Link from "next/link"

interface ProductsProps {
  id: string
  name: string
  discount_percentage: string
  actual_price: string
  regular_price: string
  on_sale: boolean
}

export function Card({
  id,
  name,
  discount_percentage,
  actual_price,
  regular_price,
  on_sale,
}: ProductsProps) {
  return (
    <div className="mx-3 my-3">
      <div className="border-2 border-slate-600 p-3 bg-slate-700">
        <div className="flex justify-between">
          <h1 className="mb-1 text-slate-100">{name}</h1>
          <ShoppingCart className="w-5 h-5" />
        </div>
        <div className="flex justify-between">
          <p>{discount_percentage ? actual_price : regular_price}</p>
          <p>{discount_percentage ? `Desconto: ${discount_percentage}` : ""}</p>
        </div>
        <div className="flex justify-between items-center mt-5">
          <div>
            {on_sale ? (
              <p className="text-slate-200">{"Em estoque"}</p>
            ) : (
              <p className="text-slate-400">{"Indisponível"}</p>
            )}
          </div>
          <Link
            className="bg-teal-500 p-1 px-2 text-slate-800 font-medium hover:underline"
            href={`/products/${id}`}
          >
            Detalhes
          </Link>
        </div>
      </div>
    </div>
  )
}
