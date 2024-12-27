import {FaDiscord, FaTwitter, FaGithub, FaInstagram, FaTwitch, FaMicrosoft} from "react-icons/fa"

const links = [
    { href: "https://discord.com", icon: <FaDiscord /> },
    { href: "https://twitter.com", icon: <FaTwitter /> },
    { href: "https://github.com", icon: <FaGithub /> },
    { href: "https://instagram.com", icon: <FaInstagram /> },
    { href: "https://twitch.com", icon: <FaTwitch /> },
    { href: "https://microsoft.com", icon: <FaMicrosoft /> },
]

const Footer = () => {
    return (
        <footer className="w-full font-work-sans bg-black py-8 text-white">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
                <p className="text-center text-sm md:text-left">
                    &copy; SHOP.CO 2024. All Rights Reserved.
                </p>
                <div className="flex justify-center gap-4 md:justify-start">
                    {links.map((link) => (
                        <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="text-white transition-colors duration-500 ease-in-out hover:text-white">
                            {link.icon}
                        </a>
                    ))}
                </div>
                <a href="#" className="text-center text-sm hover:underlline md:text-right">
                    Privacy Policy
                </a>
            </div>
        </footer>
    )
}
export default Footer
