"use client"

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react"

/* ---------- TYPES ---------- */

export type Product = {
  id: number
  title: string
  price: number
  image: string
}

export type CartItem = Product & {
  quantity: number
}

type CartContextType = {
  cart: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (id: number) => void
  increaseQuantity: (id: number) => void
  decreaseQuantity: (id: number) => void
  totalItems: number
  totalPrice: number
}

/* ---------- CONTEXT ---------- */

const CartContext = createContext<CartContextType | null>(null)

/* ---------- PROVIDER ---------- */

export function CartProvider({
  children,
}: {
  children: ReactNode
}) {
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(
        item => item.id === product.id
      )

      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (id: number) => {
    setCart(prev =>
      prev.filter(item => item.id !== id)
    )
  }

  const increaseQuantity = (id: number) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  }

  const decreaseQuantity = (id: number) => {
    setCart(prev =>
      prev
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    )
  }

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  )

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

/* ---------- HOOK ---------- */

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    )
  }

  return context
}