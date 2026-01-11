import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * metadata
 * @type {import('next').Metadata}
 */
export const metadata = {
  title: {
    default: "Toyota Official Cikupa - Promo & Harga Terbaik",
    template: "%s | Dealer Resmi Toyota Cikupa",
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "32x32",
        type: "image/x-icon",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  description:
    "Dapatkan promo menarik dan harga terbaik untuk pembelian mobil Toyota impian Anda. Melayani pembelian Cash & Kredit dengan proses mudah dan cepat. Hubungi Sales Resmi Toyota sekarang!",
  keywords: [
    "Dealer Resmi Toyota Cikupa",
    "Toyota Cikupa Tangerang",
    "Promo Toyota",
    "Harga Mobil Toyota",
    "Sales Toyota Resmi",
  ],
  authors: [{ name: "Sales Toyota" }],
  creator: "Sales Toyota",
  openGraph: {
    title: "Dealer Resmi Toyota Cikupa - Promo & Harga Terbaik",
    description:
      "Cari mobil Toyota impian Anda di Dealer Resmi Toyota Cikupa. Promo menarik, harga kompetitif, dan proses Cash & Kredit mudah.",
    url: "https://halotoyota.com",
    siteName: "Toyota Cikupa",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/logo-auto2000.png",
        width: 1200,
        alt: "Dealer Resmi Toyota Cikupa Auto2000",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://halotoyota.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
