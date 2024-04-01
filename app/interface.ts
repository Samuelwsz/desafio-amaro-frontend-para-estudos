export interface ProductsProps {
  id?: string
  name: string
  discount_percentage: string
  actual_price: string | number
  regular_price?: string | number
  on_sale: boolean
  image: string
}
