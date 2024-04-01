"use client"

import { ProductsProps } from "@/app/interface"
import { useShoppingCart } from "use-shopping-cart"
import { Button } from "./ui/button"

export default function AddToBag({
  id,
  name,
  discount_percentage,
  actual_price,
  on_sale,
  image,
}: ProductsProps) {
  const { addItem, handleCartClick } = useShoppingCart()

  const product = {
    name: name,
    discount_percentage: discount_percentage,
    actual_price: actual_price,
    image: image,
    on_sale: on_sale,
    id: id,
  }
  return (
    <>
      {on_sale === false ? (
        <Button
          disabled={true}
          className="disabled:bg-slate-600 p-1 px-2 text-slate-400"
          onClick={() => {
            addItem(product), handleCartClick()
          }}
        >
          Comprar
        </Button>
      ) : (
        <Button
          className="bg-slate-300 text-slate-800 p-1 px-2 hover:bg-slate-200"
          onClick={() => {
            addItem(product), handleCartClick()
          }}
        >
          Comprar
        </Button>
      )}
    </>
  )
}
