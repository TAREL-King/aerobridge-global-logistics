import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aerobridge-global-logistics.vercel.app"),
  title: {
    default: "AeroBridge Global Logistics | International Freight Solutions",
    template: "%s | AeroBridge Global Logistics",
  },
  description:
    "Explore AeroBridge Global Logistics, a portfolio demonstration of modern air freight, ocean freight, road freight and supply chain solutions.",
  applicationName: "AeroBridge Global Logistics",
  openGraph: {
    title: "AeroBridge Global Logistics",
    description:
      "Moving Beyond Borders. Delivering With Confidence. Explore our international freight and logistics solutions.",
    siteName: "AeroBridge Global Logistics",
type: "website",
images: [
  {
    url: "/opengraph-image.jpeg",
    width: 1200,
    height: 630,
    alt: "AeroBridge Global Logistics — Moving Beyond Borders. Delivering With Confidence.",
  },
],
  },
  twitter: {
    card: "summary",
    images: ["/opengraph-image.jpeg"],
    title: "AeroBridge Global Logistics",
    description:
      "Moving Beyond Borders. Delivering With Confidence. Explore our international freight and logistics solutions.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
