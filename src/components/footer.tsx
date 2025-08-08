import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Left: Logo & Info */}
        <div>
          <img 
            src="/logo/namma.png" 
            alt="Namma Uru Namma Hemme Logo"
            className="w-32 mx-auto md:mx-0 mb-4"
          />
          <h2 className="text-xl font-bold mb-2">Namma Uru Namma Hemme</h2>
          <p className="text-sm text-gray-400">
            A Helping Hands Foundation, Bangalore. Dedicated to serving our community with love, care, and dignity.
          </p>
        </div>

        {/* Center: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-pink-400 transition-colors duration-300">Home</a></li>
            <li><a href="/about" className="hover:text-pink-400 transition-colors duration-300">About Us</a></li>
            <li><a href="/services" className="hover:text-pink-400 transition-colors duration-300">Our Services</a></li>
            <li><a href="/contact" className="hover:text-pink-400 transition-colors duration-300">Join Us</a></li>
          </ul>
        </div>

        {/* Right: Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect With Us</h3>
          <div className="flex justify-center md:justify-start space-x-4 text-xl">
            <a
              href="https://www.facebook.com/profile.php?id=61576464933842"
              aria-label="Facebook"
              className="hover:text-blue-400 transition-transform duration-300 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/namm.aurunammahemme00/"
              aria-label="Instagram"
              className="hover:text-pink-500 transition-transform duration-300 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/9844281875"
              aria-label="WhatsApp"
              className="hover:text-green-500 transition-transform duration-300 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
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
