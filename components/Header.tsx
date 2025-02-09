import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

function Header() {
    return (
        <div className="border-b">
            <div className="flex flex-col lg:flex-row items-center gap-x-28 gap-y-4 p-4">
                <div className="flex items-center justify-between w-full lg:w-auto">
                    <Link href="/" className="flex items-center gap-2 shrink-0">
                        <Image
                            src="/logo.png"
                            alt="logo"
                            width={50}
                            height={50}
                        />
                        <p className="text-2xl uppercase font-extrabold truncate text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-500">
                            Tixly
                        </p>
                    </Link>

                    <div className="lg:hidden">
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                        <SignedOut>
                            <SignInButton mode="modal">
                                <button className="bg-gray-100 text-gray-800 px-3 py-1.5 text-sm rounded-lg hover:bg-gray-200 transition border border-gray-300">
                                    Sign In
                                </button>
                            </SignInButton>
                        </SignedOut>
                    </div>
                </div>

                <div className="hidden lg:block ml-auto">
                    <SignedIn>
                        <div className="flex items-center gap-4">
                            <Link href="/seller">
                                <button className="bg-gradient-to-r from-pink-600 to-red-500 text-white px-3 py-1.5 text-sm rounded-lg border-0">
                                    Sell Tickets
                                </button>
                            </Link>

                            <Link href="/tickets">
                                <button className="bg-gray-100 text-gray-600 px-3 py-1.5 text-sm rounded-lg hover:bg-gray-200 transition">
                                    My Tickets
                                </button>
                            </Link>
                            <UserButton />
                        </div>
                    </SignedIn>

                    <SignedOut>
                        <SignInButton mode="modal">
                            <button className="bg-gray-200 text-gray-800 px-3 py-1.5 text-sm rounded-lg hover:bg-gray-300 transition">
                                Sign In
                            </button>
                        </SignInButton>
                    </SignedOut>
                </div>

                {/* Mobile Action Buttons */}
                <div className="lg:hidden w-full flex justify-center gap-3">
                    <SignedIn>
                        <Link href="/seller" className="flex-1">
                            <button className="w-full bg-pink-600 text-white px-3 py-1.5 text-sm rounded-lg hover:bg-red-500 transition">
                                Sell Tickets
                            </button>
                        </Link>

                        <Link href="/tickets" className="flex-1">
                            <button className="w-full bg-gray-100 text-gray-800 px-3 py-1.5 text-sm rounded-lg hover:bg-gray-200 transition border border-gray-300">
                                My Tickets
                            </button>
                        </Link>
                    </SignedIn>
                </div>
            </div>
        </div>
    );
}

export default Header;