import Head from "next/head"

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Ecom</title>
        <meta name="description" content="Contact Ecom support team" />
      </Head>

      <section className="max-w-3xl mx-auto py-16 px-6">
        
        <h1 className="text-4xl font-bold mb-6 text-center">
          Contact Us
        </h1>

        <p className="text-gray-600 text-center mb-12">
          Have questions or need assistance? We’re here to help.
        </p>

        <form className="bg-white shadow-md rounded-xl p-8 space-y-6">

          {/* Name */}
          <div>
            <label className="block mb-2 font-medium">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 font-medium">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition"
          >
            Send Message
          </button>

        </form>

      </section>
    </>
  )
}