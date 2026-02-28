"use client"

export default function SearchBar() {
  return (
    <form action="/products" className="flex gap-2">
      <input
        name="query"
        placeholder="Search..."
        className="px-4 py-2 border rounded w-full"
      />
      <button className="bg-blue-600 text-white px-4 rounded">
        Search
      </button>
    </form>
  )
}