// Desafio: Código em inglês
// Os comentários são as linhas de código originais

import { useState } from "react"

interface Product {
  title: string;
  price: string;
}

const productList = [
  {
    title: 'Macarrão',
    /**
     * Poderia ser substituído por "Pasta", mas não julguei necessário por ser o nome próprio do produto
     */
    price: 'R$ 25,00'
  },
  {
    title: 'Hamburger',
    price: 'R$ 30,00'
  }
]

// export function ListProduto() {
export function ListProducts() {
  // const [filteredProdutos, setFilteredProdutos] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

  // function searchProduto(search: string) {
  function searchProduct(search: string) {
    // const filtrado = productList.filter(product => product.title.includes(search))
    const foundProducts = productList.filter(product => product.title.includes(search))

    // setFilteredProdutos(filtrado)
    setFilteredProducts(foundProducts)
  }

  return (
    <div>
      {/* <input type="text" onChange={(e) => searchProduto(e.target.value)} /> */}
      <input type="text" onChange={(e) => searchProduct(e.target.value)} />

      {/* {filteredProdutos.map(produto => ( */}
      {filteredProducts.map(product => (
        <div>
          {/* <p>{produto.title}</p> */}
          <p>{product.title}</p>
          {/* <p>{produto.price}</p> */}
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  )
}


