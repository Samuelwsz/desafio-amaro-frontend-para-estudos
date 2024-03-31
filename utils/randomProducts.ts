import { products } from "./data" 

// Função para obter 4 produtos aleatórios
export default function GetRandomProducts(): Product[] {
  // Embaralhe a lista de produtos
  const shuffledProducts = products.sort(() => 0.5 - Math.random())
  // Selecione os primeiros 4 produtos embaralhados
  const randomProducts = shuffledProducts.slice(0, 4)
  return randomProducts
}

// Interface para definir o tipo de um produto
interface Product {
  id: string
  name: string
  style: string
  code_color: string
  color_slug: string
  color: string
  on_sale: boolean
  regular_price: string
  actual_price: string
  discount_percentage: string
  installments: string
  image: string
  sizes: {
    available: boolean
    size: string
    sku: string
  }[]
}
