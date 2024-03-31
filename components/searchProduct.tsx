import { ProductsProps } from "@/app/interface"
import { products } from "@/utils/data"
import { ChangeEvent, useState } from "react"

interface SearchProductProps {
  setSearchResults: (results: ProductsProps[]) => void
}

export function SearchProduct({ setSearchResults }: SearchProductProps) {
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [error, setError] = useState<string>("")

  // Função para buscar o produto pelo nome
  function searchProduct() {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    if (results.length > 0) {
      setSearchResults(results)
      setError("") // Limpar mensagem de erro se resultados forem encontrados
    } else {
      setSearchResults([]) // Limpar resultados
      setError("Nenhum produto encontrado") // Definir mensagem de erro
    }
  }

  // Função para lidar com o mudança no campo de busca
  function handleSearchInputChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value)
  }

  // Função para lidar com o clique no botão de pesquisa
  function handleSearchButtonClick() {
    searchProduct()
    setSearchTerm("")
  }

  return (
    <>
      <div className="flex justify-between px-5 max-w-7xl mx-auto">
        <input
          type="text"
          placeholder="Digite o nome do produto"
          value={searchTerm}
          onChange={handleSearchInputChange}
          className="w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1"
        />
        <button onClick={handleSearchButtonClick}>Pesquisar</button>
      </div>
      <div className="">
        {error && <p className="text-red-500 text-center">{error}</p>}
      </div>
    </>
  )
}
