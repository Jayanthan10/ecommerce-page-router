import Link from "next/link"
import Image from "next/image"
import AddToCartButton from "./AddToCartButton"

export default function ProductCard({ product }: any) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition">
      <Link href={`/products/${product.id}`}>
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          className="mx-auto object-contain h-40"
        />
        <h3 className="mt-4 font-semibold line-clamp-2">
          {product.title}
        </h3>
      </Link>

      <p className="text-blue-600 font-bold mt-2">
        ${product.price}
      </p>

      <AddToCartButton product={product} />
    </div>
  )
}