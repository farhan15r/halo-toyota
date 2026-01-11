import Image from "next/image";
import Link from "next/link";

/**
 * metadata
 * @type {import('next').Metadata}
 */
export const metadata = {
    title: "404 - Halaman Tidak Ditemukan",
    description: "Halaman Tidak Ditemukan",
    robots: {
        index: false,
        follow: false,
    }
}

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Image src="/404.svg" alt="404" className="h-auto mb-8" width={400} height={400} />
            <h1 className="text-2xl font-bold">404 - Halaman Tidak Ditemukan</h1>
            <Link href="/" className="btn btn-neutral hover:opacity-80 m-10">Kembali ke Halaman Utama</Link>
        </div>
    )
}