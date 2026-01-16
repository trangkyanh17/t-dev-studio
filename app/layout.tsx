import type { Metadata } from "next";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "T-Dev Studio — Software, Done Right",
  description:
    "T-Dev Studio builds cross-platform tools and apps for Android, macOS, Windows, and Linux. Clean UI, solid engineering, software done right.",
  openGraph: {
    title: "T-Dev Studio — Software, Done Right",
    description:
      "Cross-platform tools and apps for Android, macOS, Windows, and Linux.",
    url: "https://tdevstudio.dev",
    siteName: "T-Dev Studio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "T-Dev Studio",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "T-Dev Studio — Software, Done Right",
    description:
      "Cross-platform tools and apps for Android, macOS, Windows, and Linux.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
