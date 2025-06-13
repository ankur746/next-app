
export type Category = {
  id: string
  name: string
}

export type Product = {
  id: string
  name: string
  description: string
  price: number
  image: string
  categoryId: string
}

export type CartItem = Product & {
  quantity: number
}

export type CartContextType = {
  cart: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
}