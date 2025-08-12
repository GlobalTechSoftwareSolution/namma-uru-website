'use client';

import React from "react";
import  {motion}  from "framer-motion";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const JoinUsSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-20 px-6 overflow-hidden"
      style={{
        backgroundImage: "url('/images/about1.png')",
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Social Icons */}
        <motion.div
          className="flex justify-center md:justify-start gap-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {[
            { icon: <FaFacebookF size={28} />, link: "https://www.facebook.com/profile.php?id=61576464933842", color: " bg-blue-500 hover:bg-blue-600" },
            { icon: <FaInstagram size={28} />, link: "https://www.instagram.com/namm.aurunammahemme00/", color: "bg-pink-400 hover:bg-pink-500" },
            { icon: <FaWhatsapp size={28} />, link: "https://wa.me/9844281875", color: "bg-green-400 hover:bg-green-500" },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-black p-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-110 hover:rotate-3 ${item.color} hover:text-white`}
              whileHover={{ boxShadow: "0px 0px 20px rgba(255,255,255,0.5)" }}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Content */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-extrabold leading-tight text-white">
            Join Us in Making a <br />
            <span className="relative inline-block text-yellow-400">
              Difference
              <span className="block w-16 h-1 bg-red-500 absolute -bottom-1 left-0"></span>
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-200">
            Whether you want to volunteer or seek support – <br />
            <span className="font-semibold text-yellow-300">
              Namma Uru Namma Hemme
            </span>{" "}
            is here for you.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinUsSection;
