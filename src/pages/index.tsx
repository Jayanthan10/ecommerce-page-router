import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Head>
        <title>Ecom | Home</title>
        <meta name="description" content="Modern Ecommerce Store" />
      </Head>

      <section className="relative w-full h-[85vh] overflow-hidden">

        {/* Banner Image */}
        <Image
          src="/image.png"
          alt="Promotional Banner"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Premium Online Store
          </h1>

          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Discover exclusive deals and trending products at unbeatable prices.
          </p>

          <Link
            href="/products"
            className="bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-full text-lg font-medium transition transform hover:scale-105 shadow-lg"
          >
            Shop Now
          </Link>

        </div>
      </section>
    </>
  )
}