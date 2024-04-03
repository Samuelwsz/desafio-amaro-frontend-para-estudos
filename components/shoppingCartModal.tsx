"use client"

import { useShoppingCart } from "use-shopping-cart"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"
import Image from "next/image"
import { Button } from "./ui/button"

export default function ShoppingCartModal() {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
  } = useShoppingCart()

  const calculateTotalPrice = () => {
    let total = 0

    // Verifique se cartDetails está definido antes de iterar sobre ele
    if (cartDetails) {
      Object.values(cartDetails).forEach((item) => {
        // Converta o preço atual para número e multiplique pela quantidade
        total += item.actual_price * item.quantity
      })
    }

    return total.toFixed(2) // Arredonde o total para 2 casas decimais
  }

  const totalPrice = calculateTotalPrice()

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Carrinho de compras</SheetTitle>
        </SheetHeader>
        <div className="h-full flex flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="-my-6 divide-y divide-gray-200">
              {cartCount === 0 ? (
                <h1 className="py-6 text-slate-500">
                  Você não tem nenhum item
                </h1>
              ) : (
                <>
                  {Object.values(cartDetails ?? {}).map((entry) => (
                    <li key={entry.id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <Image
                          src={entry.image || ""}
                          alt="Product image"
                          width={100}
                          height={100}
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex flex-col justify-between text-base font-medium text-gray-900">
                            <h3>{entry.name}</h3>
                            <p>R$: {entry.actual_price}</p>
                          </div>
                        </div>

                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">QTD: {entry.quantity}</p>
                          <div className="flex">
                            <button
                              type="button"
                              onClick={() => removeItem(entry.id)}
                              className="font-medium text-primary hover:text-primary/80"
                            >
                              Remover
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>

          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Total:</p>
              <p>R$ {totalPrice}</p>
            </div>
            <Button className="w-full bg-zinc-800 mt-3">Finalizar compra</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
