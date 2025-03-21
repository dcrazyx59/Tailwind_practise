import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="sticky">
            <div className="container fixed top-0 right-0 left-0 mx-auto flex justify-between items-center p-2 pt-8 border-b-1 ">
                <Link href="/" className=" text-lg font-bold">
                    AppIcon
                </Link>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="text-white md:hidden focus:outline-none"
                >
                ☰
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex text-2xl divide-x divide-white">
                    <Link href="#" className=" hover:text-gray-400 px-15">Home</Link>
                    <Link href="/about" className=" hover:text-gray-400 px-15">About</Link>
                    <Link href="/tech" className=" hover:text-gray-400 px-15">Technologies</Link>
                    <Link href="/contact" className=" hover:text-gray-400 px-15">Contact Me</Link>
                </div>

                {/* Mobile Menu (Dropdown) */}
                {isMenuOpen && (
                <div className="md:hidden absolute top-16 right-0 bg-gray-800 w-full">
                    <Link href="#" className="block p-2 hover:text-gray-400 ">Home</Link>
                    <Link href="/about" className="block p-2 hover:text-gray-400">About</Link>
                    <Link href="/tech" className="block p-2 hover:text-gray-400">Technologies</Link>
                    <Link href="/contact" className="block p-2 hover:text-gray-400">Contact Me</Link>
                </div>
                )}
            </div>
        </nav>
    );
  }