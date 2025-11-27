'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; 
import Logo from '../public/LogoCropped.jpg'; 

const NAV_ITEMS = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },

];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const leftNavItems = NAV_ITEMS.slice(0, Math.ceil(NAV_ITEMS.length / 2));
    const rightNavItems = NAV_ITEMS.slice(Math.ceil(NAV_ITEMS.length / 2));

    return (
        <header className="relative w-full  shadow-sm z-50">
            <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-4 sm:px-6 lg:px-8">
       
                <nav className="hidden md:flex flex-1 justify-start">
                    <ul className='flex items-center space-x-6 lg:space-x-10 list-none'>
                        {leftNavItems.map(item => (
                            <li key={item.label} className="text-gray-700 hover:text-amber-700 transition duration-200 ease-in-out font-tiktok text-lg font-medium">
                                <Link href={item.href}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>


                <div className="shrink-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    <Link href="/">
                        <Image 
                            src={Logo} 
                            alt="Logo" 
                            width={160} 
                            height={160} 
                            className="object-contain h-20 w-auto" 
                        />
                    </Link>
                </div>
                <nav className="hidden md:flex flex-1 justify-end">
                    <ul className='flex items-center space-x-6 lg:space-x-10 list-none'>
                        {rightNavItems.map(item => (
                            <li key={item.label} className="text-gray-700 hover:text-amber-700 transition duration-200 ease-in-out font-tiktok text-lg font-medium">
                                <Link href={item.href}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="md:hidden flex items-center">
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 text-gray-700 rounded-md"
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>
            <div 
                className={`fixed inset-0 bg-amber-50/95 backdrop-blur-sm z-40 transform transition-transform duration-300 ease-in-out ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                } md:hidden`}
            >
                <div className="flex justify-end p-6">
                    <button 
                        onClick={() => setIsMenuOpen(false)}
                        className="p-2 text-gray-700  focus:outline-none   rounded-md"
                        aria-label="Close Menu"
                    >
                        <X size={28} />
                    </button>
                </div>
                <nav className="flex flex-col items-center justify-center h-full -mt-20 space-y-8">
                    {[...leftNavItems, ...rightNavItems].map(item => (
                        <Link 
                            key={item.label}
                            href={item.href}
                            className="text-3xl font-tiktok font-bold text-gray-800 hover:text-amber-700 transition duration-200 ease-in-out"
                            onClick={() => setIsMenuOpen(false)} // Close menu on item click
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
                <div>
                    <h1>mastercut</h1>
                </div>
            </div>
        </header>
    );
}