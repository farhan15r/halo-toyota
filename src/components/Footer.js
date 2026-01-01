import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-base-200 text-base-content p-10">
            <div className="max-w-300 mx-auto footer sm:footer-horizontal ">
                <aside className="max-w-md gap-8">
                    <div className="flex justify-center">
                        <Image
                            src="/logo-auto2000.png"
                            alt="Logo Auto2000"
                            width={0}
                            height={0}
                            className="w-3/5 h-auto"
                        />
                    </div>
                    <div className="w-full max-w-125">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15865.157067916927!2d106.510843!3d-6.225539!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e42073c3e918589%3A0xbd1e7b04cf272fad!2sDealer%20Toyota%20Cikupa!5e0!3m2!1sen!2sid!4v1767271652975!5m2!1sen!2sid"
                            className="border-none w-full"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <address className="not-italic">
                        <strong className="block text-xl mb-1">Auto2000 Cikupa</strong>
                        Jl. Raya Serang No. 54-55, KM. 16,5, Sukamulya, Kec. Cikupa, Kabupaten Tangerang, Banten 15710
                    </address>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
            </div>
        </footer>
    )
}