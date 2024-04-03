import GetRandomProducts from "@/utils/randomProducts"
import Image from "next/image"
import Link from "next/link"

export function RamdomProducts() {
  const randomProducts = GetRandomProducts()

  return (
    <div className="m-auto max-w-7xl">
      <h1 className="text-center mt-5 text-lg text-slate-300 font-medium">
        Produtos que você talvez goste
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 m-auto my-5 p-5">
        {randomProducts.map((product) => (
          <div key={product.id} className="border border-slate-600 p-3">
            <h2 className="text-sm">{product.name}</h2>
            <p className="mb-5">R$: {product.actual_price}</p>
            <div className="my-3">
              <Image
                alt="product image"
                src={product.image}
                width={200}
                height={200}
              />
            </div>
            <Link
              className="bg-teal-500 p-1 px-2 text-slate-800 font-medium hover:underline"
              href={`/products/${product.id}`}
            >
              Detalhes
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
