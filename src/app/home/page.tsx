import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="relative flex items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero.jpg')", // 🔁 Replace with your actual image path
        height: "90vh", // ⬅️ You can change this to '100vh', '80vh', etc.
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 text-white px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          WELCOME TO NAMMA URU <br />
          NAMMA HEMME
        </h1>

        <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded shadow-lg transition-all duration-300">
          <Link href="/about">Explore More</Link>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
