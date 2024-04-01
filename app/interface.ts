export interface ProductsProps {
  id?: string
  name: string
  discount_percentage: string
  actual_price: number
  regular_price?: number
  on_sale: boolean
  image: string
}
