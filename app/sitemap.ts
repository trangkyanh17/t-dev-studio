import { MetadataRoute } from "next";
import { PRODUCTS } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tdev.site";

  const locales = ["vi", "en"];

  const staticPages = locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
  }));

  const productPages = Object.values(PRODUCTS).flatMap((product) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}/products/${product.slug}`,
      lastModified: new Date(),
    }))
  );

  return [...staticPages, ...productPages];
}