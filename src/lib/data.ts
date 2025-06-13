import { Category, Product } from "@/types/product"

export const categories: Category[] = [
  { id: "electronics", name: "Electronics" },
  { id: "clothing", name: "Clothing" },
  { id: "accessories", name: "Accessories" },
]

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    price: 99.99,
    image: "https://m.media-amazon.com/images/I/610NdWdTLiL._SX522_.jpg",
    description: "Premium noise-cancelling headphones",
    categoryId: "electronics",
  },
  {
    id: "2",
    name: "Smartwatch",
    price: 199.99,
    image: "https://m.media-amazon.com/images/I/610NdWdTLiL._SX522_.jpg",
    description: "Feature-packed smartwatch",
    categoryId: "electronics",
  },
  {
    id: "3",
    name: "Denim Jacket",
    price: 59.99,
    image: "https://m.media-amazon.com/images/I/71THmNHGfIL._SY741_.jpg",
    description: "Stylish denim jacket",
    categoryId: "clothing",
  },
]
