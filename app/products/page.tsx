import { Card } from "@/components/card"
import { products } from "@/utils/data"

export default function Products() {
  return (
    <main className="max-w-7xl m-auto">
      <div className="grid md:grid-cols-2 xl:grid-cols-3 ">
        {products.map((product) => (
          <Card
            key={product.id}
            name={product.name}
            actual_price={product.actual_price}
            discount_percentage={product.discount_percentage}
            on_sale={product.on_sale}
            regular_price={product.regular_price}
            id={product.id}
            image={product.image}
          />
        ))}
      </div>
    </main>
  )
}
