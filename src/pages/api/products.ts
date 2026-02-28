import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query

  try {
    const url = id
      ? `https://fakestoreapi.com/products/${id}`
      : `https://fakestoreapi.com/products`

    const response = await fetch(url)

    if (!response.ok) {
      return res.status(500).json({
        message: "Failed to fetch products",
      })
    }

    const data = await response.json()

    res.status(200).json(data)

  } catch (error) {
    res.status(500).json({
      message: "Server error",
    })
  }
}