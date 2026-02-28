import "@/styles/globals.css"
import type { AppProps } from "next/app"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { CartProvider } from "@/context/CartContext"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Navbar />
      <main className="min-h-screen max-w-7xl mx-auto px-6 py-12">
        <Component {...pageProps} />
      </main>
      <Footer />
    </CartProvider>
  )
}