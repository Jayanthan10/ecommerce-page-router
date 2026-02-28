"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-20">

      <div className="text-center py-3 bg-gray-800 cursor-pointer"
           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        Back to Top ↑
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">

        <div>
          <h3 className="text-white font-semibold mb-4">Shop</h3>
          <Link href="/products">Products</Link>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <Link href="/about">About</Link>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <Link href="/contact">Contact</Link>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Account</h3>
          <Link href="/cart">Cart</Link>
        </div>

      </div>

      <div className="text-center py-4 border-t border-gray-700">
        © {new Date().getFullYear()} Ecom
      </div>

    </footer>
  )
}