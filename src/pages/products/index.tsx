import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { ProductsService } from "@/services/products-service"
import ProductGrid from "@/components/ProductList"
import LoadingSpinner from "@/components/LoadingSpinner"
import { Product } from "@/types/product"

export default function Products() {
  const router = useRouter()
  const { title } = router.query

  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)

      try {
        const data = await ProductsService.getProducts()

        const filtered =
          typeof title === "string"
            ? data.filter(product =>
                product.title
                  .toLowerCase()
                  .includes(title.toLowerCase())
              )
            : data

        setProducts(filtered)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [title])

  if (loading) return <LoadingSpinner />

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">
        All Products
      </h2>
      <ProductGrid products={products} />
    </div>
  )
}