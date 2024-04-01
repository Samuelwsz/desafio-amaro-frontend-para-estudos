export interface ProductsProps {
  id?: string
  name: string
  discount_percentage: string
  actual_price: string
  regular_price?: string
  on_sale: boolean
  image: string
}
