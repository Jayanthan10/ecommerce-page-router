"use client"

import Link from "next/link"
import { useRouter } from "next/router"
import { useCart } from "@/context/CartContext"

export default function Navbar() {
  const router = useRouter()
  const { totalItems } = useCart()

  const isProductsPage = router.pathname.startsWith("/products")

  return (
    <nav className="bg-black text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        <Link href="/" className="text-2xl font-bold">
          Ecom
        </Link>

        {isProductsPage && (
          <form action="/products" className="flex gap-2 mx-10 flex-1">
            <input
              name="query"
              placeholder="Search products..."
              className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700"
            />
            <button className="bg-blue-600 px-4 py-2 rounded">
              Search
            </button>
          </form>
        )}

        <div className="flex gap-8 items-center">
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>

          <Link href="/cart" className="relative">
            Cart
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-4 bg-blue-600 text-xs px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

      </div>
    </nav>
  )
}