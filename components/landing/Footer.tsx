import {FaDiscord, FaTwitter, FaGithub, FaInstagram, FaTwitch, FaMicrosoft} from "react-icons/fa"

const links = [
    { href: "https://discord.com", icon: <FaDiscord className="size-5" /> },
    { href: "https://twitter.com", icon: <FaTwitter className="size-5" /> },
    { href: "https://github.com", icon: <FaGithub className="size-5" /> },
    { href: "https://instagram.com", icon: <FaInstagram className="size-5" /> },
    { href: "https://twitch.com", icon: <FaTwitch className="size-5" /> },
    { href: "https://microsoft.com", icon: <FaMicrosoft className="size-5" /> },
]

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-black text-white font-work-sans text-sm mt-24">
            {/* TOP */}
            <div className="flex flex-col max-sm:items-center max-sm:text-center md:flex-row justify-between gap-24">
                {/* LEFT */}
                <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
                    <Link href="/">
                        <div className="text-2xl tracking-wide">SHOP.CO</div>
                    </Link>
                    <p>
                        3252 Winding Way, Central Plaza, Willowbrook, CA 90210, United
                        States
                    </p>
                    <span className="font-semibold">hello@shop.co.dev</span>
                    <span className="font-semibold">+1 234 567 890</span>
                        <div className="flex justify-center gap-4 md:justify-start">
                            {links.map((link) => (
                                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer"
                                   className="text-white transition-colors duration-500 ease-in-out hover:text-white">
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                </div>
                {/* CENTER */}
                <div className="hidden lg:flex justify-between w-1/2">
                    <div className="flex flex-col justify-between">
                        <h1 className="font-medium text-lg">COMPANY</h1>
                        <div className="flex flex-col gap-6">
                            <Link href="">About Us</Link>
                            <Link href="">Careers</Link>
                            <Link href="">Affiliates</Link>
                            <Link href="">Blog</Link>
                            <Link href="">Contact Us</Link>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <h1 className="font-medium text-lg">SHOP</h1>
                        <div className="flex flex-col gap-6">
                            <Link href="">New Arrivals</Link>
                            <Link href="">Accessories</Link>
                            <Link href="">Men</Link>
                            <Link href="">Women</Link>
                            <Link href="">All Products</Link>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <h1 className="font-medium text-lg">HELP</h1>
                        <div className="flex flex-col gap-6">
                            <Link href="">Customer Service</Link>
                            <Link href="">My Account</Link>
                            <Link href="">Find a Store</Link>
                            <Link href="">Legal & Privacy</Link>
                            <Link href="">Gift Card</Link>
                        </div>
                    </div>
                </div>
                {/* RIGHT */}
                <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
                    <h1 className="font-medium text-lg">SUBSCRIBE</h1>
                    <p>
                        Be the first to get the latest news about trends, promotions, and
                        much more!
                    </p>
                    <div className="flex">
                        <input
                            type="text"
                            placeholder="Email address"
                            className="p-4 w-3/4 text-black"
                        />
                        <button className="w-1/4 bg-lama text-white">JOIN</button>
                    </div>
                    <span className="font-semibold">Secure Payments</span>
                    <div className="flex justify-between">
                        <Image src="/skrill.png" alt="" width={40} height={20} />
                        <Image src="/paypal.png" alt="" width={40} height={20} />
                        <Image src="/mastercard.png" alt="" width={40} height={20} />
                        <Image src="/visa.png" alt="" width={40} height={20} />
                    </div>
                </div>
            </div>
            {/* BOTTOM */}
            <div className="flex flex-col md:flex-row max-sm:text-center items-center justify-between gap-8 mt-16">
                <div className="">&copy; SHOP.CO 2024. All Rights Reserved.</div>
                <div className="flex flex-col gap-8 md:flex-row">
                    <div className="">
                        <span className="mr-4">Language</span>
                        <span className="font-medium">United States | English</span>
                    </div>
                    <div className="">
                        <span className=" mr-4">Currency</span>
                        <span className="font-medium">$ USD</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
