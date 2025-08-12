'use client';

import { useState } from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#F3E2D4] text-white">
      {/* 🔺 Row with 3 Swamiji Images */}
      <div className="flex justify-between items-center px-4 sm:px-6 py-2">
        {/* Left Image */}
        <div className="bg-white rounded-full p-1">
          <Image
            src="/logo/gavisiddeshwara-swamiji.png"
            alt="Gavisiddeshwara Swamiji"
            width={80}
            height={80}
            className="rounded-full object-cover object-[50%_30%] w-16 h-16 sm:w-20 sm:h-20"
          />
        </div>

        {/* Center Image */}
        <div className="bg-white rounded-full p-1">
          <Image
            src="/logo/shivkumara-swamiji.png"
            alt="Shivakumara Swamiji"
            width={90}
            height={90}
            className="rounded-full object-cover object-[50%_30%] w-20 h-20 sm:w-24 sm:h-24"
          />
        </div>

        {/* Right Image */}
        <div className="bg-white rounded-full p-1">
          <Image
            src="/logo/images (1).jpg"
            alt="Siddeshwar Swamiji"
            width={80}
            height={80}
            className="rounded-full object-cover object-[10%_50%] w-16 h-16 sm:w-20 sm:h-20"
          />
        </div>
      </div>

      {/* 🔻 Navbar Section */}
      <header className="py-4 px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        {/* Logo + Title */}
        <Link href="/" className="flex items-center space-x-4 rounded-full">
          <Image
            src="/logo/namma.png"
            alt="Logo"
            width={48}
            height={48}
            className="h-15 sm:h-20 w-auto"
          />
          <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-black text-center sm:text-left">
            Namma Uru Namma Hemme
          </span>
        </Link>

        {/* Nav links - Desktop */}
        <nav className="hidden md:flex space-x-4 sm:space-x-8 text-base sm:text-lg lg:text-xl">
          {[
            { name: "Home", href: "/" },
            { name: "About Us", href: "/about" },
            { name: "Services", href: "/services" },
            { name: "Contact", href: "/contact" },
            { name: "Success Stories", href: "/sucessstories" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-black font-medium transition duration-300 ease-in-out
                hover:text-blue-600
                after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1
                after:bg-blue-600 after:transition-all after:duration-300
                hover:after:w-full hover:scale-105"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-4 sm:space-x-6 text-2xl sm:text-3xl">
          <a
            href="https://www.instagram.com/namm.aurunammahemme00/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-black hover:text-pink-500 transition duration-300" />
          </a>
          <a
            href="https://wa.me/9844281875"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="text-black hover:text-green-500 transition duration-300" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61576464933842"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-black hover:text-blue-500 transition duration-300" />
          </a>
        </div>
      </header>

      {/* 🔽 Mobile Menu Toggle Button */}
      <div className="md:hidden px-4 pb-2">
        <button
          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
          className="flex items-center justify-center text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition w-20"
        >
          Menu
        </button>
      </div>

      {/* 🔽 Mobile Menu Links */}
      {mobileServicesOpen && (
        <div className="flex-col flex-wrap justify-center mt-2 mx-4 bg-white text-black shadow-lg rounded-md z-10">
          {[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Contact", href: "/contact" },
            { name: "Services", href: "/services" }, 
            { name: "Success Stories", href: "/sucessstories" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => {
                setMobileMenuOpen(false);
                setMobileServicesOpen(false);
              }}
              className="block px-4 py-2 hover:bg-gray-400 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
