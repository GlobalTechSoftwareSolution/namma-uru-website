'use client';

import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const WhatWeDoSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-black mb-6"
        >
          What We Do <span className="text-pink-600">Helping Hands Foundation</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-700 mb-8"
        >
          We support underprivileged individuals and families by providing essential
          resources, education assistance, and community welfare programs. Together, we aim
          to create a society where no one is left behind.
        </motion.p>

        {/* Section: Job Consultancy */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-left mt-8 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
        >
          <h3 className="text-2xl font-bold flex items-center gap-3 text-black">
            <span className="bg-pink-100 p-3 rounded-full">
              <FaBriefcase className="text-pink-600 text-2xl" />
            </span>
            <span>Job Consultancy & Career Guidance</span>
          </h3>

          <p className="text-gray-700 mt-3 mb-4">
            We connect job seekers with the right opportunities. Our dedicated career support team helps with:
          </p>

          <ul className="list-disc list-inside text-gray-800 space-y-2 pl-4">
            {[
              "Resume building",
              "Skill development workshops",
              "Interview preparation",
              "Connecting with trusted employers"
            ].map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.05, color: "#ec4899" }} // hover pink
                transition={{ duration: 0.2 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>

          <p className="text-gray-700 mt-6">
            We specialize in assisting rural youth, women, and economically weaker sections to
            find stable employment and build brighter futures.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
