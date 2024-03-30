import { Home } from "lucide-react"
import Link from "next/link"

export function NavBar() {
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
            <Link
              href={"/shoppingCart"}
              className="hover:underline hover:text-slate-400"
            >
              Carrinho
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
