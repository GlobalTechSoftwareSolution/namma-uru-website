import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#E7D3D3] text-black py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Left: Logo & Info */}
        <div>
          <img 
            src="/logo/namma.png" 
            alt="Namma Uru Namma Hemme Logo"
            className="w-32 mx-auto md:mx-0 mb-4 rounded-full"
          />
          <h2 className="text-xl font-bold mb-2">Namma Uru Namma Hemme</h2>
          <p className="text-sm text-black mb-4">
            A Helping Hands Foundation, Bangalore. Dedicated to serving our
            community with love, care, and dignity.
          </p>
        </div>

        {/* Center: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="/"
                className="hover:text-pink-400 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-pink-400 transition-colors duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="hover:text-pink-400 transition-colors duration-300"
              >
                Our Services
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-pink-400 transition-colors duration-300"
              >
                Join Us
              </a>
            </li>
          </ul>
        </div>

        {/* Right: Social Media + Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect With Us</h3>

          {/* Contact Info (Right Side) */}
          <div className="space-y-2 text-sm text-black">
           
          <div className="space-y-3 text-sm text-black">
            <div className="flex items-center gap-2">
              <Image src="/logo/phone.png" alt="Phone" width={20} height={20} />
              <a href="tel:+919844281875" className="hover:text-black">
                +91-9844281875
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/logo/email.png" alt="Email" width={20} height={20} />
              <a
                href="mailto:tech@globaltechsoftwaresolutions.com"
                className="hover:text-black"
              >
                tech@globaltechsoftwaresolutions.com

              </a>
            </div>
            <div className="flex items-start gap-2">
              <Image src="/logo/location.png" alt="Location" width={20} height={20} className="mt-1" />
              <span>
                No 10, 4th Floor, Gaduniya Complex, Ramaiah Layout, Vidyaranyapura, Bangalore - 560097
              </span>
            </div>
          </div>
 <br />
               {/* Social Media Icons */}
              <div className="flex gap-4 mt-10 items-center justify-center">
                <Link href="https://www.instagram.com/namm.aurunammahemme00" target="_blank" rel="noopener noreferrer">
                  <Image src="/logo/instagram.png" alt="Instagram" width={24} height={24} />
                </Link>
                
                <Link href="https://www.facebook.com/profile.php?id=61576464933842" target="_blank" rel="noopener noreferrer">
                  <Image src="/logo/facebook.png" alt="Facebook" width={24} height={24} />
                </Link>
                <Link href="https://wa.me/9844281875" target="_blank" rel="noopener noreferrer">
                  <Image src="/logo/whatsapp.png" alt="YouTube" width={24} height={24} />
                </Link>
              </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 text-center text-xs text-gray-500 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Namma Uru Namma Hemme. All rights reserved.
      </div>
    </footer>
  );
}
