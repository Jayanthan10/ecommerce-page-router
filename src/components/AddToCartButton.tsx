"use client"

import { useCart } from "@/context/CartContext"

export default function AddToCartButton({ product }: any) {
  const { addToCart } = useCart()

  return (
    <button
      onClick={() => addToCart(product)}
      className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
    >
      Add to Cart
    </button>
  )
}