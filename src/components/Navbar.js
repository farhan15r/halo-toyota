'use client';

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-base-100 shadow-sm sticky top-0 z-50">
            <div className="navbar max-w-300 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                            onClick={() => document.activeElement?.blur()}
                        >
                            <li><Link href="/">Home</Link></li>
                            <li>
                                <a>List Mobil</a>
                                <ul className="p-2">
                                    <li><Link href="/list-mobil?type=mpv">MPV</Link></li>
                                    <li><Link href="/list-mobil?type=suv">SUV</Link></li>
                                    <li><Link href="/list-mobil?type=sedan">SEDAN</Link></li>
                                    <li><Link href="/list-mobil?type=sport">SPORT</Link></li>
                                    <li><Link href="/list-mobil?type=commercial">COMMERCIAL</Link></li>
                                    <li><Link href="/list-mobil?type=electrified">ELECTRIFIED</Link></li>
                                    <li><Link href="/list-mobil?type=hatchback">HATCHBACK</Link></li>
                                </ul>
                            </li>
                            <li><Link href="/daftar-harga">Daftar Harga</Link></li>
                        </ul>
                    </div>
                    <Link href="/">
                        <Image src="/logo-auto2000.png" alt="Logo" width={200} height={0} />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href="/">Home</Link></li>
                        <li>
                            <details>
                                <summary>List Mobil</summary>
                                <ul
                                    className="p-2 bg-base-100 w-60 z-1 shadow-2xl"
                                    onClick={(e) => e.currentTarget.closest('details')?.removeAttribute('open')}
                                >
                                    <div className="grid grid-cols-2">
                                        <li><Link href="/list-mobil?type=mpv">MPV</Link></li>
                                        <li><Link href="/list-mobil?type=suv">SUV</Link></li>
                                        <li><Link href="/list-mobil?type=sedan">SEDAN</Link></li>
                                        <li><Link href="/list-mobil?type=sport">SPORT</Link></li>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <li><Link href="/list-mobil?type=commercial">COMMERCIAL</Link></li>
                                        <li><Link href="/list-mobil?type=electrified">ELECTRIFIED</Link></li>
                                        <li><Link href="/list-mobil?type=hatchback">HATCHBACK</Link></li>
                                    </div>
                                </ul>
                            </details>
                        </li>
                        <li><Link href="/daftar-harga">Daftar Harga</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link href="/brosur-2026.png" className="btn btn-primary" download={true}>Download Brosur</Link>
                </div>
            </div>
        </nav>
    );
}