'use client';

import React from 'react';
import { motion } from 'framer-motion'; // ✅ updated for v12

const WhyChooseUs = () => {
  const features = [
    {
      title: "Local Roots, Big Impact",
      text: `We know our community inside out. Our local approach ensures real, lasting change that uplifts people and strengthens neighborhoods.`,
    },
    {
      title: "Transparent & Trustworthy",
      text: `We share every step of our work openly. Clear communication and honest updates build trust with everyone we serve.`,
    },
    {
      title: "Complete Support",
      text: `From emotional care to skill training, we stand with people at every stage, helping them not just survive but thrive.`,
    },
  ];

  return (
    <section className="py-16 px-4 md:px-20 bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] text-gray-900">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-6"
        >
          Why Choose <span className="text-pink-600">Namma Uru Namma Hemme?</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-1 w-48 bg-pink-600 mx-auto mb-12 rounded-full"
        ></motion.div>

        {/* Feature Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl border border-gray-200 transition-all duration-300"
            >
              <h3 className="font-bold text-xl text-pink-600">{feature.title}</h3>
              <p className="mt-2 text-gray-700">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
