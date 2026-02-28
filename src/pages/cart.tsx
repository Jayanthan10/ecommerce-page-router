import Head from "next/head"
import Image from "next/image"
import { useCart } from "../context/CartContext"

export default function CartPage() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalPrice,
  } = useCart()

  return (
    <>
      <Head>
        <title>Cart | Ecom</title>
      </Head>

      <section className="max-w-5xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold mb-10">Your Cart</h1>

        {cart.length === 0 && (
          <div className="text-center text-gray-600">
            Your cart is empty.
          </div>
        )}

        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white p-6 rounded-xl shadow-sm border"
            >
              {/* LEFT - Image & Info */}
              <div className="flex items-center gap-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="object-contain"
                />

                <div>
                  <h3 className="font-semibold text-lg">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    ${item.price}
                  </p>
                </div>
              </div>

              {/* RIGHT - Controls */}
              <div className="flex items-center gap-4">

                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>

                <span className="font-semibold">
                  {item.quantity}
                </span>

                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 font-medium hover:underline ml-4"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* TOTAL SECTION */}
        {cart.length > 0 && (
          <div className="mt-12 text-right">
            <h2 className="text-2xl font-bold text-blue-600">
              Total: ${totalPrice.toFixed(2)}
            </h2>
          </div>
        )}
      </section>
    </>
  )
}