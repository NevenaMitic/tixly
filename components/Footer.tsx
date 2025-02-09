import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div className="bg-gradient-to-r from-pink-600 to-red-500 text-white">
            {/* Background curve */}
            <div className="relative">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 120"
                    className="absolute w-full"
                >
                    <path
                        d="M0,0 C300,100 600,-50 900,30 C1200,110 1500,-20 1440,60 L1440,0 Z"
                        fill="currentColor"
                    />
                </svg>
            </div>

            {/* Main footer content */}
            <div className="px-10 py-12 lg:py-16">
                <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-x-36 lg:mt-4">
                    {/* About section */}
                    <div className="flex flex-col gap-2">
                        <p className="text-3xl font-bold text-white">About TIXLY</p>
                        <p className="text-lg text-white">
                            TIXLY is a modern ticketing platform designed to simplify the purchase and sale of tickets for various events like concerts, sports, and more.
                        </p>
                        <p className="text-lg text-white">
                        Currently in test mode. Developed as a hands-on learning project, it serves as a playground for experimenting with various features and honing skills in real-world application development.
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col">
                        <p className="text-3xl font-semibold text-white">Contact</p>
                        <div className="text-lg text-white">
                            <Link href="mailto:nevenamitic886@gmail.com" className="block hover:underline">
                             nevenamitic886@gmail.com
                            </Link>
                            <Link href="tel:+381645895784" className="block hover:underline">
                            +381645895784
                            </Link>
                        </div>
                    </div>

                    {/* Social media */}
                    <div className="flex justify-center space-x-5 lg:mt-5">
                        <a
                            className="text-white hover:text-pink-200 transform hover:scale-150 transition-all duration-150 ease-in-out"
                            href="https://github.com/NevenaMitic"
                            aria-label="GitHub"
                        >
                            <Github className="w-8 h-8" />
                        </a>
                        <a
                            className="text-white hover:text-pink-200 transform hover:scale-150 transition-all duration-150 ease-in-out"
                            href="https://www.linkedin.com/in/nevena-mitic-0733a7191/"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-8 h-8" />
                        </a>
                        <a
                            className="text-white hover:text-pink-200 transform hover:scale-150 transition-all duration-150 ease-in-out"
                            href="https://www.instagram.com/nevenamitic__/?next=%2Fproud.mp%2Ffeed%2F"
                            aria-label="Instagram"
                        >
                            <Instagram className="w-8 h-8" />
                        </a>
                    </div>
                </div>
            </div>
            {/* Footer copyright */}
            <p className="flex justify-center items-center text-white font-extralight pb-2">
                &copy; {year} – TIXLY. All rights reserved.
            </p>
        </div>
    );
};

export default Footer;
