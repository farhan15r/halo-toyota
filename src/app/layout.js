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

export const metadata = {
  title: {
    default: "Toyota Official Website - Promo & Harga Terbaik",
    template: "%s | Toyota Sales",
  },
  description:
    "Dapatkan promo menarik dan harga terbaik untuk pembelian mobil Toyota impian Anda. Melayani pembelian Cash & Kredit dengan proses mudah dan cepat. Hubungi Sales Resmi Toyota sekarang!",
  keywords: [
    "Toyota",
    "Promo Toyota",
    "Harga Toyota",
    "Dealer Toyota",
    "Sales Toyota",
    "Avanza",
    "Veloz",
    "Rush",
    "Raize",
    "Innova Zenix",
    "Fortuner",
    "Calya",
    "Agya",
  ],
  authors: [{ name: "Sales Toyota" }],
  creator: "Sales Toyota",
  openGraph: {
    title: "Toyota Official Website - Promo & Harga Terbaik",
    description:
      "Dapatkan promo menarik dan harga terbaik untuk pembelian mobil Toyota impian Anda. Melayani pembelian Cash & Kredit dengan proses mudah dan cepat.",
    url: "https://halo-toyota.com",
    siteName: "Halo Toyota",
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
