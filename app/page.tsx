import { RamdomProducts } from "@/components/ramdomProducts"

export default function Home() {
  return (
    <main className="">
      <h1 className="text-center text-3xl my-16">
        Lorem ipsum dolor sit amet consectetur
      </h1>
      <p className="text-justify max-w-2xl m-auto text-lg p-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
        nostrum iste ratione, voluptas minus, ipsa eaque rem sapiente ex,
        consectetur ab earum explicabo omnis ducimus porro doloribus quia error
        suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Blanditiis nostrum iste ratione, voluptas minus, ipsa eaque rem sapiente
        ex, consectetur ab earum explicabo omnis ducimus porro doloribus quia
        error suscipit.
      </p>
      <div className="" data-testid="random-products">
        <RamdomProducts />
      </div>
    </main>
  )
}
