import { ProductsProps } from "@/app/interface"
import Image from "next/image"
import Link from "next/link"
import AddToBag from "./addToBag"

export function Card({
  id,
  name,
  discount_percentage,
  actual_price,
  regular_price,
  on_sale,
  image,
}: ProductsProps) {
  return (
    <div className="mx-3 my-3">
      <div className="border-2 border-slate-600 p-3 bg-slate-700">
        <h1 className="mb-1 text-slate-100">{name}</h1>
        <div className="flex justify-between">
          <p>
            {discount_percentage ? (
              <>
                <p>R$ {actual_price}</p>
              </>
            ) : (
              <>
                <p>R$ {regular_price}</p>
              </>
            )}
          </p>
          <p>{discount_percentage ? `Desconto: ${discount_percentage}` : ""}</p>
        </div>
        <div className="mt-5">
          <Image alt="card image" src={image} width={200} height={200} />
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
        <div className="m-auto flex justify-center mt-3">
          <AddToBag
            id={id}
            actual_price={actual_price}
            discount_percentage={discount_percentage}
            image={image}
            name={name}
            on_sale={on_sale}
          />
        </div>
      </div>
    </div>
  )
}
