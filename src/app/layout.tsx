import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title:
    "Propsoch - Visit Curated Homes, Negotiate Smarter & Buy Intelligently",
  description:
    "Get end-to-end guidance from property wizards who've helped intelligent homebuyers like you buy 200+ homes in the last year alone. Trusted by 1000+ intelligent homebuyers.",
  keywords: [
    "real estate",
    "home buying",
    "Bangalore",
    "Mumbai",
    "property",
    "curated homes",
    "negotiate",
    "intelligent homebuyers",
    "property consultation",
    "home loans",
  ],
  authors: [{ name: "Propsoch" }],
  metadataBase: new URL("https://propsoch-landing.vercel.app"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title:
      "Propsoch - Visit Curated Homes, Negotiate Smarter & Buy Intelligently",
    description:
      "Get end-to-end guidance from property wizards who've helped intelligent homebuyers like you buy 200+ homes in the last year alone.",
    url: "https://propsoch-landing.vercel.app",
    siteName: "Propsoch",
    images: [
      {
        url: "/og-image.png", // Assuming we might have one, otherwise fallback or remove
        width: 1200,
        height: 630,
        alt: "Propsoch Landing Page",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Propsoch - Intelligent Home Buying",
    description:
      "Get end-to-end guidance from property wizards who've helped intelligent homebuyers like you buy 200+ homes in the last year alone.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
