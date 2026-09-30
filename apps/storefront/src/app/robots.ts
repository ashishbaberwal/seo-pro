import { MetadataRoute } from "next"

const URL = process.env.NEXT_PUBLIC_URL || "http://localhost:7777"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${URL}/sitemap.xml`,
  }
}
