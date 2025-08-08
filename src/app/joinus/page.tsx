import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const JoinUsSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-20 px-6"
      style={{
        backgroundImage: "url('/images/join-bg.jpg')", // put your background image here
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-8 text-black">
          <a href="https://www.facebook.com/profile.php?id=61576464933842" className="bg-white p-4 rounded-md shadow-lg hover:scale-105 transition">
            <FaFacebookF size={32} />
          </a>
          <a href="https://www.instagram.com/namm.aurunammahemme00/" className="bg-white p-4 rounded-md shadow-lg hover:scale-105 transition">
            <FaInstagram size={32} />
          </a>
          <a href="https://wa.me/9844281875" className="bg-white p-4 rounded-md shadow-lg hover:scale-105 transition">
            <FaWhatsapp size={32} />
          </a>
        </div>

        {/* Content */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold leading-tight text-black">
            Join Us in Making a <br />
            <span className="relative inline-block">
              Difference
              <span className="block w-16 h-1 bg-red-500 absolute -bottom-1 left-0"></span>
            </span>
          </h2>
          <p className="mt-4 text-lg text-black">
            Whether you want to volunteer or seek support – <br />
            <span className="font-semibold text-black">Namma Uru Namma Hemme</span> is here for you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
