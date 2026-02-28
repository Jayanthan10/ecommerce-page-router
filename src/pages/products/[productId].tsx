import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Image from "next/image"
import Head from "next/head"
import { ProductsService } from "@/services/products-service"
import { useCart } from "@/context/CartContext"
import LoadingSpinner from "@/components/LoadingSpinner"
import { Product } from "@/types/product"

export default function ProductDetail() {
  const router = useRouter()
  const { productId } = router.query

  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)

  const { addToCart } = useCart()

  useEffect(() => {
    if (!productId || typeof productId !== "string") return

    const fetchProduct = async () => {
      setLoading(true)
      try {
        const data = await ProductsService.getProductById(
          Number(productId)
        )
        setProduct(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [productId])

  if (loading) return <LoadingSpinner />

  if (!product)
    return <p className="text-center py-20">Product not found</p>

  return (
    <>
      <Head>
        <title>{product.title} | Ecom</title>
      </Head>

      <div className="grid md:grid-cols-2 gap-10 py-16">
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={400}
          className="object-contain"
        />

        <div>
          <h1 className="text-3xl font-bold">
            {product.title}
          </h1>

          <p className="text-gray-600 mt-4">
            {product.description}
          </p>

          <p className="text-blue-600 text-2xl mt-4 font-bold">
            ${product.price}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-6"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  )
}