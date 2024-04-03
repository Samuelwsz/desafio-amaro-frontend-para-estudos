import { ProductsProps } from "@/app/interface"
import { products } from "../utils/data"

// Função para obter 4 produtos aleatórios
export default function GetRandomProducts(): ProductsProps[] {
  // Embaralhe a lista de produtos
  const shuffledProducts = products.sort(() => 0.5 - Math.random())
  // Selecione os primeiros 4 produtos embaralhados
  const randomProducts = shuffledProducts.slice(0, 4)
  return randomProducts
}
