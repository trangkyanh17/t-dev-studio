import type { Metadata } from "next";
import { PRODUCTS } from "@/lib/products";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
  children: React.ReactNode;
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug, locale } = await params;
  const product = PRODUCTS[slug as keyof typeof PRODUCTS];

  if (!product) {
    return {};
  }

  const title = `${product.name} — T-Dev Studio`;
  const description =
    product.description ||
    "A cross-platform tool built by T-Dev Studio.";

  return {
    title,
    description,
    metadataBase: new URL("https://t-dev.studio"),
    alternates: {
      canonical: `/${locale}/products/${slug}`,
      languages: {
        vi: `/vi/products/${slug}`,
        en: `/en/products/${slug}`
      }
    },
    openGraph: {
      type: "website",
      locale: locale,
      siteName: "T-Dev Studio",
      title,
      description,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.name
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [product.image]
    }
  };
}

export default function ProductLayout({ children }: Props) {
  return <>{children}</>;
}