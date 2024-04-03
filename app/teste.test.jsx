import { render, screen, fireEvent } from "@testing-library/react"
import Home from "./page"
import AddToBag from "@/components/addToBag"
import { NavBar } from "@/components/navbar"
import { RamdomProducts } from "@/components/ramdomProducts"
import { products } from "@/utils/data"
import { Card } from "@/components/card"
import { SearchProduct } from "@/components/searchProduct"
import Products from "./products/page"
import ProductId from "./products/[id]/page"

//teste home page
describe("Home Component", () => {
  test("renders heading correctly", () => {
    const { getByText } = render(<Home />)
    const headingElement = getByText(/Lorem ipsum dolor sit amet consectetur/i)
    expect(headingElement).toBeInTheDocument()
  })

  test("renders main element", () => {
    const { getByRole } = render(<Home />)
    const mainElement = getByRole("main")
    expect(mainElement).toBeInTheDocument()
  })

  test("renders paragraph element", () => {
    const { getByText } = render(<Home />)
    const paragraphElement = getByText(
      /Lorem ipsum dolor sit amet, consectetur adipisicing elit./i
    )
    expect(paragraphElement).toBeInTheDocument()
  })

  test("renders random products component", () => {
    const { getByTestId } = render(<Home />)
    const randomProductsComponent = getByTestId("random-products")
    expect(randomProductsComponent).toBeInTheDocument()
  })
})

//AddToBag component
// Mock useShoppingCart hook
jest.mock("use-shopping-cart", () => ({
  useShoppingCart: jest.fn(() => ({
    addItem: jest.fn(),
    handleCartClick: jest.fn(),
  })),
}))

describe("AddToBag Component", () => {
  test("renders button with correct text", () => {
    const { getByText } = render(
      <AddToBag
        id="1"
        name="Product Name"
        discount_percentage="10"
        actual_price="$10"
        on_sale={true}
        image="product.jpg"
      />
    )
    const buttonElement = getByText("Comprar")
    expect(buttonElement).toBeInTheDocument()
  })

  test("disables button if on_sale is false", () => {
    const { getByText } = render(
      <AddToBag
        id="1"
        name="Product Name"
        discount_percentage="10"
        actual_price="$10"
        on_sale={false}
        image="product.jpg"
      />
    )
    const buttonElement = getByText("Comprar")
    expect(buttonElement).toBeDisabled()
  })
})

//navbar component
describe("NavBar Component", () => {
  test("renders navbar with correct links", () => {
    const { getByText } = render(<NavBar />)
    const homeLink = screen.getByTestId("icon-home")
    const productsLink = getByText("Produtos")
    const cartLink = getByText("Carrinho")

    expect(homeLink).toBeInTheDocument()
    expect(productsLink).toBeInTheDocument()
    expect(cartLink).toBeInTheDocument()
  })
})

//RamdomProducts page
jest.mock("../utils/randomProducts", () => ({
  __esModule: true,
  default: () => [
    {
      id: 1,
      name: "Product 1",
      actual_price: "$10",
      image:
        "https://images.pexels.com/photos/20618882/pexels-photo-20618882/free-photo-of-mulher-de-pe-retrato-segurando.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Product 2",
      actual_price: "$20",
      image:
        "https://images.pexels.com/photos/20618882/pexels-photo-20618882/free-photo-of-mulher-de-pe-retrato-segurando.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ],
}))

describe("RamdomProducts", () => {
  it("renders products correctly", () => {
    render(<RamdomProducts />)

    // Check if the title is rendered correctly
    expect(
      screen.getByText("Produtos que você talvez goste")
    ).toBeInTheDocument()

    // Check if product names are rendered correctly
    expect(screen.getByText("Product 1")).toBeInTheDocument()
    expect(screen.getByText("Product 2")).toBeInTheDocument()

    // Check if product prices are rendered correctly
    expect(screen.getByText("$10")).toBeInTheDocument()
    expect(screen.getByText("$20")).toBeInTheDocument()

    // Check if product images are rendered correctly
    expect(screen.getAllByAltText("product image")).toHaveLength(2)

    // Check if "Detalhes" link is rendered correctly
    expect(screen.getAllByText("Detalhes")).toHaveLength(2)
  })
})

//card component
describe("Card component", () => {
  const product = {
    id: 1,
    name: "Product Name",
    discount_percentage: 10,
    actual_price: 50,
    regular_price: 60,
    on_sale: true,
    image:
      "https://images.pexels.com/photos/20618882/pexels-photo-20618882/free-photo-of-mulher-de-pe-retrato-segurando.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  }

  const productNotOnSale = {
    id: 2,
    name: "Product Name 2",
    discount_percentage: 0,
    actual_price: 70,
    regular_price: 70,
    on_sale: false,
    image:
      "https://images.pexels.com/photos/20618882/pexels-photo-20618882/free-photo-of-mulher-de-pe-retrato-segurando.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  }

  beforeEach(() => {
    render(<Card {...product} />)
  })

  it("renders product name", () => {
    const productName = screen.getByText(product.name)
    expect(productName).toBeInTheDocument()
  })

  it("renders correct price based on discount", () => {
    const priceElement = screen.getByText(`R$ ${product.actual_price}`)
    expect(priceElement).toBeInTheDocument()
  })

  it("renders discount percentage if available", () => {
    const discountElement = screen.getByText(
      `Desconto: ${product.discount_percentage}`
    )
    expect(discountElement).toBeInTheDocument()
  })

  it("renders image with correct alt text", () => {
    const imageElement = screen.getByAltText("card image")
    expect(imageElement).toBeInTheDocument()
  })

  it('renders "Em estoque" if product is on sale', () => {
    const availabilityElement = screen.getByText("Em estoque")
    expect(availabilityElement).toBeInTheDocument()
  })

  it('renders "Indisponível" if product is not on sale', () => {
    render(<Card {...productNotOnSale} />)
    const unavailableElement = screen.getByText("Indisponível")
    expect(unavailableElement).toBeInTheDocument()
  })

  it("renders Detalhes link with correct href", () => {
    const linkElement = screen.getByRole("link", { name: /Detalhes/i })
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute("href", `/products/${product.id}`)
  })
})

//searchproduct component
describe("SearchProduct component", () => {
  const setSearchResultsMock = jest.fn()

  beforeEach(() => {
    render(<SearchProduct setSearchResults={setSearchResultsMock} />)
  })

  it("renders input field and search button", () => {
    const inputField = screen.getByPlaceholderText("Digite o nome do produto")
    expect(inputField).toBeInTheDocument()

    const searchButton = screen.getByRole("button", { name: /Pesquisar/i })
    expect(searchButton).toBeInTheDocument()
  })

  it("handles search input change", () => {
    const inputField = screen.getByPlaceholderText("Digite o nome do produto")
    fireEvent.change(inputField, { target: { value: "Product" } })

    expect(inputField).toHaveValue("Product")
  })

  it("calls search function on button click", () => {
    const inputField = screen.getByPlaceholderText("Digite o nome do produto")
    const searchButton = screen.getByRole("button", { name: /Pesquisar/i })

    fireEvent.change(inputField, { target: { value: "Product" } })
    fireEvent.click(searchButton)

    expect(setSearchResultsMock).toHaveBeenCalled()
  })

  it("displays error message when no products found", () => {
    const inputField = screen.getByPlaceholderText("Digite o nome do produto")
    const searchButton = screen.getByRole("button", { name: /Pesquisar/i })

    fireEvent.change(inputField, { target: { value: "Nonexistent Product" } })
    fireEvent.click(searchButton)

    const errorMessage = screen.getByText("Nenhum produto encontrado")
    expect(errorMessage).toBeInTheDocument()
  })
})

// products page
describe("Products component", () => {
  it("renders without crashing", () => {
    render(<Products />)
  })
})

//productId page
describe("ProductId component", () => {
  it("renders without crashing", () => {
    const mockProduct = products[0] // Assuming products is an array of products and we are using the first product for testing
    const { getByText } = render(<ProductId params={{ id: mockProduct.id }} />)
    const productNameElement = getByText(mockProduct.name)
    expect(productNameElement).toBeInTheDocument()
  })

  it('renders "Produto não encontrado." when product is not found', () => {
    const { getByText } = render(<ProductId params={{ id: "invalid_id" }} />)
    const errorMessageElement = getByText("Produto não encontrado.")
    expect(errorMessageElement).toBeInTheDocument()
  })
})
