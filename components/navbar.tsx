"use client"

import { Home, ShoppingBag } from "lucide-react"
import Link from "next/link"
import ShoppingCartModal from "./shoppingCartModal"
import { useShoppingCart } from "use-shopping-cart"

export function NavBar() {
  const { handleCartClick } = useShoppingCart()

  return (
    <div className="bg-slate-900 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href={"/"} className="hover:text-slate-400">
            <Home />
          </Link>
          <div className="flex gap-10">
            <Link
              href={"/products"}
              className="hover:underline hover:text-slate-400"
            >
              Produtos
            </Link>
            <button
              onClick={() => handleCartClick()}
              className="hover:underline hover:text-slate-400 flex flex-col items-center"
            >
              <ShoppingBag />
              <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                Carrinho
              </span>
            </button>
            <ShoppingCartModal />
          </div>
        </div>
      </div>
    </div>
  )
}
