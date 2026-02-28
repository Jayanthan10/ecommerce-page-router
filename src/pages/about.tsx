import Head from "next/head"

export default function About() {
  return (
    <>
      <Head>
        <title>About | Ecom</title>
        <meta name="description" content="Learn more about Ecom store" />
      </Head>

      <section className="max-w-5xl mx-auto py-16 px-6">

        {/* Heading */}
        <h1 className="text-4xl font-bold mb-6 text-center">
          About Ecom
        </h1>

        {/* Intro */}
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Ecom is a modern online store built with Next.js. 
          We focus on delivering premium quality products 
          at affordable prices with a smooth shopping experience.
        </p>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to make online shopping simple, 
              fast, and reliable. We aim to provide customers 
              with high-quality products and a seamless user experience.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">
              Why Choose Us?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We combine modern technology with customer-first thinking.
              From secure payments to fast delivery, we ensure your
              shopping journey is smooth and enjoyable.
            </p>
          </div>
        </div>

        {/* Extra Info */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">
            Built With
          </h3>
          <p className="text-gray-600">
            Next.js • React • TypeScript • Tailwind CSS
          </p>
        </div>

      </section>
    </>
  )
}