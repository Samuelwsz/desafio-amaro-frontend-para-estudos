import { products } from "@/utils/data"
import Image from "next/image"

export default function ProductId({
  params: { id },
}: {
  params: { id: string }
}) {
  // Encontre o produto correspondente ao ID fornecido
  const product = products.find((product) => product.id === id)

  // Verifique se o produto foi encontrado
  if (!product) {
    return <div>Produto não encontrado.</div>
  }

  // Renderize os detalhes do produto
  return (
    <>
      {" "}
      <div className="mx-10 my-3 flex gap-3 border border-slate-600 max-w-3xl p-3 bg-slate-700">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
        />
        <div className="flex flex-col">
          <h1 className="font-medium text-xl">{product.name}</h1>
          <p className="mt-2">
            Preço:{" "}
            {product.discount_percentage
              ? product.actual_price
              : product.regular_price}
          </p>

          <p className="my-2 font-medium text-lg">Tamanhos disponíveis:</p>

          <ul>
            {product.sizes.map((size) => (
              <li key={size.sku}>
                {size.available ? (
                  <p className="text-slate-200">{size.size}</p>
                ) : (
                  <p className="text-slate-400/70">{size.size}</p>
                )}
              </li>
            ))}
          </ul>
          <p className="my-5">Parcelado em até: {product.installments}</p>
          <div className="flex gap-14 items-center">
            {product.on_sale ? (
              <p className="text-slate-200 font-medium">{"Em estoque"}</p>
            ) : (
              <p className="text-slate-400 font-medium">{"Indisponível"}</p>
            )}
            <button className="bg-teal-600 p-1 px-2 rounded-sm">
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
